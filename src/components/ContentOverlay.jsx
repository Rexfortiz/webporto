import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import IntroductionOverlay from "./IntroductionOverlay";
import AboutMeOverlay from "./AboutMeOverlay";
import TechStack from "./TechStack";

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
  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityLastSection, setOpacityLastSection] = useState(1)


  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1/ 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
  })

  return (
    <Scroll html>
      <div className="w-screen">
        <IntroductionOverlay opacity={opacityFirstSection} />
        <TechStack opacity={opacitySecondSection} />
        <Section opacity={opacityLastSection}>
          <h1 className="font-serif text-2xl">page 3</h1>
        </Section>
      </div>
    </Scroll>
  )
}

export default ContentOverlay;