import React, { useLayoutEffect, useRef } from 'react'
import LayeredText from '../mobileComponent/LayeredText'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WaveComp1 from '../mobileComponent/WaveComp/WaveComp1'
import WaveComp2 from '../mobileComponent/WaveComp/WaveComp2'
import WaveComp3 from '../mobileComponent/WaveComp/WaveComp3'

gsap.registerPlugin(ScrollTrigger) 

const Hero = () => {
  const wave1 = useRef()
  const wave2 = useRef()
  const wave3 = useRef()
  const test = useRef()
  const test2 = useRef()
  const tl = useRef()

  

  useLayoutEffect(() => {

    gsap.to(wave1.current, {
      scrollTrigger: {
        trigger: test.current,
        start: "center 45%",
        end: "bottom 10%",
        scrub:true,
        // toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
      },
      ease: "expo.inOut",
      y: 480,
    })
    gsap.to(wave2.current, {
      scrollTrigger: {
        trigger: test.current,
        start: "center 50%",
        end: "bottom 12%",
        scrub:true,
        toggleActions: "play reverse play reverse", // Ensures the animation reverses when scrolling back up
      },
      ease: "power1.inOut",
      y: 580,
    })
    gsap.to(wave3.current, {
      scrollTrigger: {
        trigger: test.current,
        start: "center 60%",
        end: "bottom 14%",
        scrub:true,
        toggleActions: "play reverse play reverse",
      },
      ease: "power1.inOut",
      y: 590,
    })
  }, [])

  return (
    <section ref={test} className='w-full flex flex-col items-center h-[800px] max-lg:h-[700px] max-sm:h-[650px]'>
      <div className='w-full absolute'>
        <WaveComp1 forwardedRef={wave1} />
        <WaveComp2 forwardedRef={wave2} />
        <WaveComp3 forwardedRef={wave3} />
      </div>
      <div className='mt-[15vh] max-sm:mt-[20vh] '>
        <div className='relative'>     
          <div className="flex items-center absolute justify-center layered-text-container text-[100px] max-lg:text-[76px] max-sm:text-[60px] font-black font-poppins">
            <LayeredText text="HELLO!" />
            <LayeredText text="I'M FAREL" />
          </div>
          <div className='w-full absolute top-[230px] max-lg:top-[180px] max-sm:top-[135px] flex justify-center'>
            <img loading='lazy' ref={test2} src="/images/selfphoto5.png" className='z-[2] w-[400px] max-lg:w-[350px] max-sm:w-[300px]' />
            <div className='w-[200px] max-sm:top-[250px] text-center absolute top-[290px] flex justify-center z-[3]'>
              <p className='text-white font-comfortaa'>a game developer & self-taught front end web developer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero