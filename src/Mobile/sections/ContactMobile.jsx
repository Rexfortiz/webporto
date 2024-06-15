import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SocialMedia } from '../../constants';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger) 


const ContactMobile= () => {
  const form = useRef();
  const buttonRefs = useRef([]);
  const img1Ref = useRef()
  const img2Ref = useRef()
  const img3Ref = useRef()
  const img4Ref = useRef()
  const img5Ref = useRef()
  const img6Ref = useRef()
  const sectionRef = useRef()

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

  useEffect(() => {
    gsap.fromTo(img1Ref.current,{
      y: 300,
      rotate:20
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -250
    })

    gsap.fromTo(img2Ref.current,{
      y: 350,
      rotate:-20,
      
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -450
    })

    gsap.fromTo(img3Ref.current,{
      y: 400,
      rotate:-20,
      x:-20
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -250
    })

    gsap.fromTo(img4Ref.current,{
      y: 300,
      rotate:5,
      x:50
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -350
    })

    gsap.fromTo(img5Ref.current,{
      y: 550,
      rotate:10,
      x:-50
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -300
    })

    gsap.fromTo(img6Ref.current,{
      y: 300,
      rotate:-10,
      x:-30
    },{
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "30% top",
        scrub:true,
      },
      y: -450
    })
  })

  return (
    <section 
      className='w-full flex flex-col gap-5 items-center py-10 border' 
      ref={sectionRef}
    >
      <div className='flex w-full'>
        <div className='flex flex-col w-full gap-8'>
          <h1 className='text-white font-sans font-black text-[100px] max-lg:text-[80px] max-sm:text-[50px]'>More About Me</h1>
          <p className='text-white font-comfortaa text-[20px] max-md:text-[16px]'>
            I have been deeply passionate about gaming, 
            playing a wide variety of games since I was 2 years old. 
            During my college years, I learned how to create and design games 
            from scratch. I am an open-minded individual who embraces numerous 
            possibilities and enjoys socializing with others. 
            This inclination has led me to engage in various activities, 
            such as participating in organizations and learning new technical
            skills like graphic design and web engineering.
          </p>
          <div className='flex gap-4 max-md:gap-2'>
            {SocialMedia.map((content,index) => (
              <a key={content.name} href={content.url} target='_blank'>
                <button  
                  key={index}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className='bg-white p-3 h-[60px] w-[60px] rounded-full max-md:h-[45px] max-md:w-[45px]'
                >
                  <img src={content.img} width={46} />
                </button>
              </a>
            ))}
            <div className='bg-white px-5 h-[60px] max-md:h-[45px]  flex gap-3 justify-center items-center rounded-full'>
              <img src="/icons/email.svg" width={22} />
              <p className='font-comfortaa font-bold max-md:text-[13px]'>thomasfarel9422@gmail.com</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex'>
              <img ref={img1Ref} src="/self/self1.png" className='z-[-12] h-[250px] max-md:h-[220px] max-sm:h-[200px]' />
              <img ref={img2Ref} src="/self/self2.png" className='ml-60 max-md:ml-16 z-[-12] h-[250px] max-lg:h-[200px] max-sm:h-[180px]' />
            </div>
            <div className='flex'>
              <img ref={img3Ref} src="/self/self3.png" className='z-[-12] h-[250px] max-lg:h-[220px] max-sm:h-[200px]' />
              <img ref={img4Ref} src="/self/self4.png" className='z-[-12] h-[250px] max-lg:h-[220px] max-sm:h-[200px]' />
            </div>
            <div className='flex'>
              <img ref={img5Ref} src="/self/self5.png" className='z-[-12] h-[250px] max-lg:h-[220px] max-sm:h-[200px]' />
              <img ref={img6Ref} src="/self/self6.png" className='ml-60 max-md:ml-10 z-[-12] h-[250px] max-lg:h-[220px] max-sm:h-[180px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[620px] max-xl:h-[320px] w-full flex flex-col justify-center items-center'>
        <h1 className='my-5 text-white font-sans font-bold max-md:text-[80px] max-sm:text-[65px] text-[100px] gradient-about'>Contact Me!</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-[512px] max-sm:w-full font-comfortaa mb-80'>
          <input type="text" name="user_name" placeholder='Your Name' 
            className='h-[52px] max-sm:h-[50px] pl-4 rounded-xl backdrop-blur-[2px] backdrop-filter gradient-input text-white' 
          />
          <input type="email" name="user_email" placeholder='your_email@email.com' 
            className='h-[52px] max-sm:h-[50px] pl-4 rounded-xl backdrop-blur-[2px] backdrop-filter gradient-input text-white'
          />
          <textarea name="message" placeholder='Write your message here!' 
            className='h-[152px] max-sm:h-[140px] resize-none pl-4 pt-4 rounded-xl backdrop-blur-[2px] backdrop-filter gradient-input text-white'
          />
          <input type="submit" disabled={isLoading !== "nothing"}
            value={isLoading == 'nothing' && "Send" || isLoading == 'sending' && "Sending..." || isLoading == 'sent' && "Sent" || isLoading == 'refreshing' && "Sent"}
            className='h-[72px] max-sm:h-[60px] cursor-pointer bg-black text-white gradient-input rounded-xl gradient-btn disabled:cursor-default backdrop-blur-[4px] text-[20px] backdrop-filter'
          />
        </form>
      </div>
    </section>
  );
}

export default ContactMobile