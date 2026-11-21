import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// These end up in the browser bundle no matter what — EmailJS public keys are
// meant to be public. Keeping them in .env just keeps them out of git and makes
// rotating them easy. Real protection lives in the EmailJS dashboard
// (allowed origins, reCAPTCHA, a fixed "To" address).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const CONTACT_LIMITS = { name: 100, email: 254, message: 2000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Strip control characters (incl. CR/LF in single-line fields, which could be
// used for header injection if the template ever puts them in a header).
const clean = (value, { multiline = false } = {}) => {
  const str = String(value ?? '').trim();
  return multiline
    ? str.replace(/[^\P{Cc}\n\t]/gu, '')
    : str.replace(/\p{Cc}/gu, ' ');
};

const validate = ({ user_name, user_email, message }) => {
  if (!user_name || !user_email || !message) return 'Please fill in every field.';
  if (user_name.length > CONTACT_LIMITS.name) return 'Your name is too long.';
  if (user_email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(user_email))
    return 'Please enter a valid email address.';
  if (message.length > CONTACT_LIMITS.message)
    return `Message must be under ${CONTACT_LIMITS.message} characters.`;
  return null;
};

/**
 * Shared contact-form logic for desktop and mobile.
 * status: 'idle' | 'sending' | 'sent' | 'error'
 */
export function useContactForm() {
  const formRef = useRef(null);
  const resetTimer = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const finish = (nextStatus, message = '') => {
    setStatus(nextStatus);
    setError(message);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus('idle'), 3000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const data = new FormData(formRef.current);

    // Honeypot: hidden field real users never see. Bots that fill it get a
    // fake "sent" and nothing is delivered.
    if (data.get('bot-field')) {
      formRef.current.reset();
      return finish('sent');
    }

    // Only these three fields are sent — nothing else from the form (or an
    // attacker-added input) reaches the template.
    const params = {
      user_name: clean(data.get('user_name')),
      user_email: clean(data.get('user_email')),
      message: clean(data.get('message'), { multiline: true }),
    };

    const invalid = validate(params);
    if (invalid) return finish('error', invalid);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Contact form: missing VITE_EMAILJS_* env vars (see .env.example).');
      return finish('error', 'Contact form is unavailable right now. Please email me directly.');
    }

    setStatus('sending');
    setError('');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY,
        blockHeadless: true, // reject Puppeteer/Playwright-style headless bots
        limitRate: { id: 'contact-form', throttle: 60_000 }, // 1 message / minute / browser
      });
      formRef.current?.reset();
      finish('sent');
    } catch (err) {
      finish(
        'error',
        err?.status === 429
          ? 'Please wait a minute before sending another message.'
          : 'Message failed to send. Please try again or email me directly.',
      );
    }
  };

  return { formRef, status, error, onSubmit };
}

export const submitLabel = (status) =>
  ({ sending: 'Sending...', sent: 'Sent', error: 'Try again' })[status] ?? 'Send';
