/* eslint-disable */

import {  useEffect, useRef } from 'react';
import { gamePortoContent } from '../../constants'
import Skill from '../../cards/Skill';
import GradientButton from '../../buttons/GradientButton';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ButtonGameMobile from '../mobileComponent/ui/ButtonGameMobile';


gsap.registerPlugin(ScrollTrigger) 

const GamePorto = () => {
  const imgRefs = useRef([]);
  const divBottomRefs = useRef([]);

  const sectionRef = useRef()

  useEffect(() => {
    gsap.to(divBottomRefs.current[0].current, {
      scrollTrigger: {
        trigger: imgRefs.current[0].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })

    gsap.to(divBottomRefs.current[1].current, {
      scrollTrigger: {
        trigger: imgRefs.current[1].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })

    gsap.to(divBottomRefs.current[2].current, {
      scrollTrigger: {
        trigger: imgRefs.current[2].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })

    gsap.to(divBottomRefs.current[3].current, {
      scrollTrigger: {
        trigger: imgRefs.current[3].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })
    gsap.to(divBottomRefs.current[4].current, {
      scrollTrigger: {
        trigger: imgRefs.current[4].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })
    gsap.to(divBottomRefs.current[5].current, {
      scrollTrigger: {
        trigger: imgRefs.current[5].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })
    gsap.to(divBottomRefs.current[6].current, {
      scrollTrigger: {
        trigger: imgRefs.current[6].current,
        start: "center 30%",
        end: "bottom top",
        scrub:true,
      },
      marginTop: "-250px"
    })
  }, [])



  return (
    <section ref={sectionRef} id="gameporto-mobile" className='w-full flex flex-col gap-5  py-10'>
      <h1 className='text-white font-sans font-black text-[100px] max-lg:text-[80px] max-sm:text-[50px]'>Game Portofolio</h1>
      <p className='text-white font-comfortaa text-[20px] max-md:text-[16px] max-sm:text-[14px]'>
            I have been deeply passionate about gaming, 
            playing a wide variety of games since I was 2 years old. 
            During my college years, I learned how to create and design games 
            from scratch. I am an open-minded individual who embraces numerous 
            possibilities and enjoys socializing with others. 
            This inclination has led me to engage in various activities, 
            such as participating in organizations and learning new technical
            skills like graphic design and web engineering.
          </p>
      <div className="h-full flex justify-center w-full">
        <div className="h-full px-8 max-sm:px-0 pt-20 flex flex-col items-center gap-8 w-full">
        {gamePortoContent.map((content, index) => {
            // Create refs for each WebPortoCard
            const divRef = useRef(null);
            const imgRef = useRef(null);
            divBottomRefs.current[index] = divRef;
            imgRefs.current[index] = imgRef;

            return (
              <div key={index} className=' relative flex flex-col items-center w-full'>
                <img ref={imgRef} src={content.imgMobile} className='w-[75%] max-lg:w-[85%] max-sm:w-full z-[1] rounded-2xl border-x-2 border-t-2 border-white'/>
                <div ref={divRef} className="backdrop-blur-[17.9px] mt-[-22px] z-[2] border-b-2 border-l-2 border-r-2 border-white rounded-t-none backdrop-filter gradient w-[75%] max-lg:w-[85%] max-sm:w-full rounded-2xl flex-shrink-0">
                  <div className='max-md:px-8 max-sm:px-5 px-16 py-9 h-full'>
                    <div className='flex flex-col h-full gap-16 justify-between'>
                      <div className='flex flex-col gap-5'>
                        <p className='font-sans font-bold text-white max-2xl:text-[24px] text-[36px] max-md:text-[20px]'>{content.name}</p>
                        <p className='font-comfortaa text-white max-lg:text-[16px] text-[18px] max-sm:text-[14px]'>{content.desc}</p>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2 font-medium'>
                          <p className='text-white text-[20px] max-2xl:text-[18px] max-sm:text-[16px]'>What i did:</p>
                          <p className='text-white text-[20px] max-2xl:text-[18px] max-sm:text-[14px]'>{content.jobdesk}</p>
                        </div>
                        <div className='flex gap-5'>
                          <ButtonGameMobile text={"Trailer"} link={content.trailer} />
                          <ButtonGameMobile text={"Play"} link={content.playUrl} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default GamePorto