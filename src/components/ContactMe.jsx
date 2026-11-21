import React, { useRef } from 'react';
import gsap from 'gsap';
import { SocialMedia } from '../constants';
import { CONTACT_LIMITS, submitLabel, useContactForm } from '../hooks/use-contact-form';

const ContactMe = () => {
  const buttonRefs = useRef([]);
  const { formRef, status, error, onSubmit } = useContactForm();



  const handleMouseEnter = (index) => {
    gsap.to(buttonRefs.current[index], { y: 10, duration: 0.15 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(buttonRefs.current[index], { y: 0, duration: 0.3 });
  };

  return (
    <section 
      className='mt-[800px] flex flex-col items-center px-[350px]'
    >
      <div className='flex w-[80%] max-xl: h-[700px] py-14 gradient-about'>
        <div className='flex flex-col w-full gap-5 justify-center '>
          <h3 className='text-white font-bold text-[46px]'>More About Me</h3>
          <p className='text-white font-comfortaa'>
            I have been deeply passionate about gaming, 
            playing a wide variety of games since I was 2 years old. 
            During my college years, I learned how to create and design games 
            from scratch. I am an open-minded individual who embraces numerous 
            possibilities and enjoys socializing with others. 
            This inclination has led me to engage in various activities, 
            such as participating in organizations and learning new technical
            skills like graphic design and web engineering.
          </p>
          <div className='flex gap-2'>
            {SocialMedia.map((content,index) => (
              <a key={content.name} href={content.url} target='_blank' rel='noopener noreferrer'>
                <button  
                  key={index}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className='bg-white p-3 h-[50px] w-[50px] rounded-full'
                >
                  <img src={content.img} width={36}/>
                </button>
              </a>
            ))}
            <div className='bg-white px-5 h-[55px] flex gap-2 justify-center items-center rounded-full'>
              <img src="/icons/email.svg" width={20} />
              <p className='font-comfortaa font-bold'>thomasfarel9422@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=' w-full flex justify-center'>
          <img src='/images/MoreAboutMe.png' className='h-full' />
        </div>
      </div>
      <div className='h-[920px] w-full flex flex-col justify-center items-center'>
        <h1 className='my-5 text-white font-sans font-bold text-[100px] gradient-about'>Contact Me!</h1>
        <form ref={formRef} onSubmit={onSubmit} className='flex flex-col gap-5 w-[512px] font-comfortaa'>
          {/* Honeypot: hidden from people, bots fill it in */}
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true"
            className='absolute -left-[9999px] h-0 w-0 opacity-0'
          />
          <input type="text" name="user_name" placeholder='Your Name' required
            maxLength={CONTACT_LIMITS.name} autoComplete="name"
            className='h-[52px] pl-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white'
          />
          <input type="email" name="user_email" placeholder='your_email@email.com' required
            maxLength={CONTACT_LIMITS.email} autoComplete="email"
            className='h-[52px] pl-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white'
          />
          <textarea name="message" placeholder='Write your message here!' required
            maxLength={CONTACT_LIMITS.message}
            className='h-[152px] resize-none pl-4 pt-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white'
          />
          {error && <p role="alert" className='text-red-400 text-sm'>{error}</p>}
          <input type="submit" disabled={status === 'sending' || status === 'sent'}
            value={submitLabel(status)}
            className='h-[52px] cursor-pointer bg-black text-white gradient-btn disabled:cursor-default backdrop-blur-[4px] backdrop-filter'
          />
        </form>
      </div>
    </section>
  );
}

export default ContactMe