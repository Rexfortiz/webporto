import React, { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useScroll } from '@react-three/drei'
import gsap from 'gsap';

const IntroductionModel = ({ scrollValue }) => {
  const texture = useLoader(TextureLoader, '/images/intro.png');

  const imgWidth = texture.image.width - 80
  const imgWHeight = texture.image.height - 80

  const model = useRef();
  const tl = useRef();
  const scroll = useScroll();

  const [modelOpacity, setModelOpacity] = useState(1)

  useFrame(() => {
    if(scroll.offset > 0.21){
      setModelOpacity(0)
    }
    else if(scroll.offset <= 0.21){
      setModelOpacity(1)
    }
  },[])

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    gsap.from(
      model.current.position, {
        duration: 1.8,
        x: -20,
        y: 45,
        ease: "power2",
      },
    );
  },[])

  //after scroll reach curtain point, it disapear.
  //implement it

  return (
    <group ref={model}>
      <mesh position={[0,270,0]} rotation={[0,0.35,0]}>
        <planeGeometry attach="geometry" args={[imgWidth, imgWHeight]} />
        <meshBasicMaterial attach="material" map={texture} opacity={modelOpacity}  transparent={true} />
      </mesh> 
    </group>
  )
}

export default IntroductionModel