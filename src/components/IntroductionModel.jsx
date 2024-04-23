import React, { useLayoutEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import gsap from 'gsap';

const IntroductionModel = ( textIntro ) => {
  const texture = useLoader(TextureLoader, '/images/intro.png');

  const imgWidth = texture.image.width - 80
  const imgWHeight = texture.image.height - 80

  const model = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    gsap.from(
      model.current.position, {
        duration: 1.8,
        x: -20,
        y: 45,
        ease: "power2"
      },
    );
  },[])

  return (
    <group ref={model}>
      <mesh position={[0,270,0]} rotation={[0,0.35,0]}>
        <planeGeometry attach="geometry" args={[imgWidth, imgWHeight]} />
        <meshBasicMaterial attach="material" map={texture} transparent={true} />
      </mesh> 
    </group>
  )
}

export default IntroductionModel