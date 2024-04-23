import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Introduction from "./IntroductionModel";

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

const Overlay = () => {

  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityLastSection, setOpacityLastSection] = useState(1)

  console.log(scroll)

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1/ 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
  })

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacitySecondSection} right>
          <h1 className="font-serif text-2xl">page 1</h1>
        </Section>
        <Section opacity={opacitySecondSection} right>
          <h1 className="font-serif text-2xl">page 2</h1>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-serif text-2xl">page 3</h1>
        </Section>
      </div>
    </Scroll>
  )
}

export default Overlay;