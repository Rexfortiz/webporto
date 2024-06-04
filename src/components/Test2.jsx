import { OrbitControls, ScrollControls, ContactShadows } from "@react-three/drei"
import { Cyberpunk } from "./Cyberpunk-hd"
import { useLayoutEffect, useRef } from 'react'
import { useScroll } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

import gsap from 'gsap';
import ContentOverlay from "./ContentOverlay"
import IntroductionModel from "./IntroductionModel"

export const Test2 = () => {

  //useRef for models
  const model = useRef();
  const textIntro = useRef();

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    gsap.from(
      model.current.position, {
        duration: 1.5,
        x: 0,
        y: 0.1,
      },
    );
  },[])

  return(
    <>
      <group position={[30,-190,50]} rotation={[0,-0.25,0]} ref={model}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}  />
        
        <ScrollControls pages={14} damping={0.2}>
          {/* <Overlay /> */}
          <IntroductionModel textIntro={textIntro} />
          
          <ContentOverlay />
          <Cyberpunk />
        </ScrollControls>
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
      </group>
    </>
  )
}