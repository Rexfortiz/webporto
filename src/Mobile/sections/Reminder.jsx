import React, {  useEffect, useRef } from 'react'; 

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
    <section className='w-full flex flex-col gap-5 items-center py-10 mt-64'>
      <div >
        <p ref={text1} className='text-white text-[20px] font-medium'>hi, want to see this website on 3D??</p>

      </div>
      <div className='mt-64'>
        <p className='text-white text-[24px] font-bold'>Try to Zoom out your browser until the loading screen appear</p>
      </div>
      <p className='text-white'>( Not Recommended on mobile )</p>
    </section>
  )
}

export default Reminder