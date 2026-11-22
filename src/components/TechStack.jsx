import { useEffect, useRef, useLayoutEffect, useState } from "react"
import gsap from 'gsap'

import { techStack } from '../constants'
import TechCard from "../cards/TechCard"
import { useFrame } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { TECH_STACK_HEIGHT, TECH_STACK_SCALE } from "../constants/scroll"

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
    // Drawn TECH_STACK_SCALE times bigger; the 3D pauses behind the taller band
    // so nothing after it shifts (see constants/scroll.js).
    <section
      className='z-0 w-full flex flex-col justify-center items-center'
      style={{ height: TECH_STACK_HEIGHT }}
    >
      <div
        className="bg-base shadow-section
        shadow-base w-full h-full flex justify-center"
      >
        <div className="dots-bg absolute left-0 bg-red-300" />
        <div
          className="mt-5 w-[992px] flex flex-col relative justify-center items-center h-[900px] "
          style={{ transform: `scale(${TECH_STACK_SCALE})`, transformOrigin: "top center" }}
        >
          <img src="/images/selfphoto5.png" className="absolute top-32 z-[2] w-[700px] left-36" />
          <h2 className="tech-text flex z-[1] relative top-[-210px] justify-center items-center text-[160px]  font-black">TECH STACK</h2>
          <h2 className="tech-text top-[-450px] relative z-[3] justify-center items-center text-[160px] text-transparent font-black">TECH STACK</h2>
          <div ref={wrapperDivRef} className="overflow-hidden w-full bottom-20 px-5 absolute z-[3]">
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