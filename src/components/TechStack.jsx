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

  return (
    <section 
      className='z-0 h-[920px] max-2xl:h-[820px] w-full flex flex-col justify-center items-center'
    >
      <div 
        className="bg-base max-2xl:shadow-section_lg max-2xl:shadow-base shadow-section
        shadow-base w-screen h-full flex justify-center"
      >
        <div className="dots-bg absolute left-0 bg-red-300" />
        <div className="mt-5 w-[992px] flex flex-col relative justify-center items-center h-[900px] ">
          <img src="/images/selfphoto5.png" className="absolute top-32 z-[2] max-2xl:left-72 max-2xl:top-36 max-2xl:w-[500px] w-[700px] left-36" />
          <h2 className="tech-text flex z-[1] relative top-[-210px] justify-center items-center max-2xl:text-[120px] text-[160px]  font-black">TECH STACK</h2>
          <h2 className="tech-text max-2xl:top-[-390px] top-[-450px] relative z-[3] justify-center items-center max-2xl:text-[120px] text-[160px] text-transparent font-black">TECH STACK</h2>
          <div ref={wrapperDivRef} className="overflow-hidden max-2xl:w-[70%] w-full bottom-20 px-5 absolute z-[3]">
            <div ref={techDivRef} className="gap-5 h-52 w-full flex items-center justify-start">
              {techStack.map((index) => (
                <TechCard key={index.name} name={index.name} img={index.img} />
              ))}
              <div ref={techDivRef2} className="gap-5 h-52 flex items-center justify-start max-lg:">
                {techStack.map((index) => (
                  <TechCard key={`${index.name}dup`} name={index.name} img={index.img} />
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