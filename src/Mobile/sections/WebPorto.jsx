/* eslint-disable */
import React, {  useEffect, useRef } from 'react'; 
import { webPortoContent } from '../../constants'
import Skill from '../../cards/Skill';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ButtonMobile from '../mobileComponent/ui/ButtonMobile';

gsap.registerPlugin(ScrollTrigger) 

const WebPorto = () => {
  const imgRefs = useRef([]);
  const divBottomRefs = useRef([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef()
  const sectionRef2 = useRef()

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
      marginTop:"-250px"
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

    let frameCounter = 0;
    const frameInterval = 20;

    const refreshTrigger = () => {
      frameCounter++;
      if (frameCounter % frameInterval === 0) {
        ScrollTrigger.refresh();
      }
    };

    gsap.ticker.add(refreshTrigger);

    return () => {
      gsap.ticker.remove(refreshTrigger);
    };
    
  }, [gsap])

  return (
    <section ref={sectionRef} id='webporto-mobile' className='w-full flex flex-col gap-5 items-center py-10'>
      <h1 ref={sectionRef2} className='text-white font-sans font-black text-[100px] max-lg:text-[80px] max-sm:text-[50px]'>Web Portofolio</h1>
      <div className='overflow-y-hidden'>
        {/* <ThreeDCardDemo />
        <AnimatedModal />
        <ExpandableCard/>
        <InfiniteMovingCards /> */}

      </div>
      <div className="h-full flex justify-center w-full">
        <div className="h-full px-8 max-sm:px-0 pt-20 flex flex-col items-center gap-8 w-full">
          {webPortoContent.map((content, index) => {
            // Create refs for each WebPortoCard
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const divRef = useRef(null);
            const imgRef = useRef(null);
            const cardRef = useRef(null);
            divBottomRefs.current[index] = divRef;
            imgRefs.current[index] = imgRef;
            cardRefs.current[index] = cardRef;

            return (
              <div ref={cardRef} key={index} className=' relative flex flex-col items-center w-full'>
                <img ref={imgRef} src={content.imgMobile} className='w-[75%] max-lg:w-[85%] max-sm:w-full z-[1] rounded-2xl border-x-2 border-t-2 border-white'/>
                <div ref={divRef} className="backdrop-blur-[17.9px] mt-[-22px] z-[2] border-b-2 border-l-2 border-r-2 border-white backdrop-filter gradient w-[75%] max-lg:w-[85%] max-sm:w-full rounded-2xl rounded-t-none flex-shrink-0">
                  <div className='max-md:px-8 max-sm:px-5 px-16 py-9 h-full'>
                    <div className='flex flex-col h-full gap-16 max-md:gap-10 max-sm:gap-8 justify-between'>
                      <div className='flex flex-col gap-5'>
                        <p className='font-sans font-bold text-white max-2xl:text-[32px] text-[36px] max-md:text-[20px] '>{content.name}</p>
                        <div className='flex flex-wrap gap-5 max-sm:gap-3'>
                          {content.skill.map((skill, index) => (
                            <Skill key={index} text={skill.text} img={skill.img} />
                          ))}
                        </div>

                      </div>
                      <div className='flex flex-col gap-10'>
                        <p className='font-comfortaa text-white max-lg:text-[16px] text-[18px] max-sm:text-[14px]'>{content.desc}</p>
                        <div className='flex gap-5'>
                          <ButtonMobile text={"Live Demo"} link={content.url} />
                          <ButtonMobile text={"Github"} link={content.github} />

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

export default WebPorto