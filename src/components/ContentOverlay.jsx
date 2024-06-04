import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import IntroductionOverlay from "./IntroductionOverlay";
import TechStack from "./TechStack";

import gsap from "gsap";
import WebOverlay from "./WebOverlay";
import GameOverlay from "./GameOverlay";
import ContactMe from "./ContactMe";

const Section = (props) => {
  return(
    <section 
      className={`h-screen flex flex-col justify-center ${props.center && "items-center"} ${props.right && "items-end"} ${props.left && "items-start"} p-10`}
      style={{
        opacity: props.opacity
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

const ContentOverlay = () => {

  const scroll = useScroll();
  const tl = useScroll();
  const techRef = useRef(null);
  const wrapperRef = useRef(null);

  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityLastSection, setOpacityLastSection] = useState(1)

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 7, 3/ 7));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
    // console.log(scroll.offset)
    // tl.current.seek(scroll.offset * tl.current.duration())
    
  })
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    console.log(windowSize.height)
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [windowSize]);

  return (
    <Scroll html>
      <div className="w-screen">
        <IntroductionOverlay opacity={opacityFirstSection} />
        <TechStack tl={tl} techRef={techRef} wrapperRef={wrapperRef} />
        <div className="flex justify-center pt-20">
          <h1 className="text-white font-bold font-sans text-[140px] max-xl:text-red-400 max-2xl:text-[120px]">Web Portofolio</h1>
        </div>
        <WebOverlay opacity={1} />
        <div className={`flex justify-center mt-[500px] max-2xl:mt-[180px] margin-sec`}>
          <h1 className="text-white font-bold font-sans text-[140px] max-xl:text-[100px]">Game Portofolio</h1>
        </div>
        <GameOverlay opacity={1} />
        <ContactMe />
      </div>
    </Scroll>
  )
}

export default ContentOverlay;