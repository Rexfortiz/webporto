import { useEffect, useRef, useLayoutEffect, useState } from "react"
import gsap from 'gsap'

import { techStack } from '../constants'
import TechCard from "../cards/TechCard"
import { useFrame } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"

const TechStack = ({  tl, techRef, wrapperRef }) => {

  const techDivRef = useRef(null);
  const techDivRef2 = useRef(null);
  const wrapperDivRef = useRef(null);

  // Assign refs to the corresponding div elements
  techRef.current = techDivRef;
  wrapperRef.current = wrapperDivRef;

  useGSAP(() => {
    gsap.to(techDivRef.current, {
      xPercent: -170,
      duration: 6,
      ease: "none",
      repeat: -1
    })
  })

  // xPercent: -170,

  return (
    <section 
      className='z-0 h-[1080px] max-xl:h-[820px] w-full flex flex-col justify-center items-center'
    >
      <div 
        className="border bg-base max-2xl:shadow-section_lg max-2xl:shadow-base shadow-section
        shadow-base w-screen h-full flex justify-center"
      >
        <div className="dots-bg absolute left-0 bg-red-300" />
        <div className="mt-5 w-[992px] relative justify-center items-center h-[900px] ">
          <img src="/images/selfphoto5.png" className="absolute top-32 z-[2] w-[700px] left-36" />
          <h2 className="tech-text flex z-[1] justify-center items-center text-[160px] font-black">TECH STACK</h2>
          <h2 className="tech-text top-[-240px] relative z-[3] justify-center items-center text-[160px] text-transparent font-black">TECH STACK</h2>
          <div ref={wrapperDivRef} className="overflow-hidden w-full bottom-20 px-5 absolute z-[3]">
            <div ref={techDivRef} className="gap-5 h-52 flex items-center justify-start">
              {techStack.map((index) => (
                <TechCard key={index.name} name={index.name} img={index.img} />
              ))}
              <div ref={techDivRef2} className="gap-5 h-52 flex items-center justify-start">
                {techStack.map((index) => (
                  <TechCard key={index.name} name={index.name} img={index.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack