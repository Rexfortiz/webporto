import React, { useLayoutEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { SocialMedia } from '../constants';

const ContactMe = () => {
  const form = useRef();
  const buttonRefs = useRef([]);

  const [isLoading, setIsLoading] = useState('nothing')

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      setIsLoading('sending')
      emailjs
        .sendForm('service_o6bg50n', 'template_lpbhxg7', form.current, {
          publicKey: 'J77rfH4sF0FrNN1tz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      
    } catch (error) {
      throw new Error(`Failed to send: ${error.message}`)
    }
    finally{
      setTimeout(() => {
        setIsLoading('sent');
      }, 1500);
      setTimeout(() => {
        setIsLoading('refreshing');
      }, 2000);
      setTimeout(() => {
        setIsLoading('nothing');
      }, 3000);
    }
  };
  


  const handleMouseEnter = (index) => {
    gsap.to(buttonRefs.current[index], { y: 10, duration: 0.15 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(buttonRefs.current[index], { y: 0, duration: 0.3 });
  };

  return (
    <section 
      className='mt-[1000px] flex flex-col items-center max-2xl:px-[200px] px-[350px]'
    >
      <div className='flex w-full max-xl: h-[700px] py-14 gradient-about'>
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
              <a key={content.name} href={content.url} target='_blank'>
                <button  
                  key={index}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img src={content.img} width={36}/>
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className=' w-full flex justify-center'>
          <img src='/images/MoreAboutMe.png' className='h-full' />
        </div>
      </div>
      <div className='h-[920px] max-xl:h-[820px] w-full flex flex-col justify-center items-center'>
        <h1 className='my-5 text-white font-sans font-bold text-[100px] gradient-about'>Contact Me!</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-[512px] font-comfortaa'>
          <input type="text" name="user_name" placeholder='Your Name' 
            className='h-[52px] pl-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white' 
          />
          <input type="email" name="user_email" placeholder='your_email@email.com' 
            className='h-[52px] pl-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white'
          />
          <textarea name="message" placeholder='Write your message here!' 
            className='h-[152px] pl-4 pt-4 rounded-xl backdrop-blur-[17.9px] backdrop-filter gradient text-white'
          />
          <input type="submit" disabled={isLoading !== "nothing"}
            value={isLoading == 'nothing' && "Send" || isLoading == 'sending' && "Sending..." || isLoading == 'sent' && "Sent" || isLoading == 'refreshing' && "Sent"}
            className='h-[52px] cursor-pointer bg-black text-white gradient-btn disabled:cursor-default backdrop-blur-[4px] backdrop-filter'
          />
        </form>
      </div>
    </section>
  );
}

export default ContactMe