import React, {  useEffect, useRef } from 'react'; 
import { ContainerScroll } from '../../components/ui/ContainerScroll';

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger) 

const Reminder = () => {

  const text1 = useRef()
  
    // gsap.to(text1.current, {
    //   scrollTrigger: {
    //     trigger: text1,
    //     start: "bottom bottom",
    //     end: "top top",
    //     scrub:true,
    //   },
    //   x: 1000
    // })
  
  return (
    <section className='w-full flex flex-col gap-5 justify-center items-center py-10'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              See this website on <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                3D Version
              </span>
            </h1>
          </>
        }
      >
        <img
          src="./web/web3d.png"
          alt="3D Website"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          loading='lazy'
        />
      </ContainerScroll>
      <div className='mt-[-230px] flex flex-col items-center'>
        <p className='text-white text-[24px] text-center font-bold'>Try to Zoom out your browser until the loading screen appear</p>
        <p className='text-white'>( Not Recommended on mobile )</p>
      </div>
        
    </section>
  )
}

export default Reminder