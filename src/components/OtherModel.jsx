import { Canvas } from '@react-three/fiber';
import { useRef } from 'react'
import Square from "./Square"
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import * as THREE from 'three'
import RectangleMesh from './RectangleMesh';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false })

import { useGSAP } from '@gsap/react';

const OtherModel = () => {

  const objectRef = useRef(new THREE.Group());
  const scrollRef = useRef()

  
  useGSAP(() => {
    const models = gsap.utils.toArray(objectRef.current.children)
    models.forEach((model) => {
      gsap.to(model.rotation, {
        y: 10,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: objectRef,
          start: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className=' border h-[100vh] flex justify-center items-center'>
      <div className='border-red-400 border'>
        <h1>Model</h1>
        <Canvas
          camera={{ position: [0, 0, 10] }}
          onCreated={({ camera }) => {
            camera.position.z = 10;
          }}
        >
          <ambientLight intensity={0.3} />

          <PerspectiveCamera makeDefault position={[0,0,10]} />
          <group ref={objectRef}>
            <Square userData={{ scrollTriggerRef: scrollRef }} />
          </group>
        </Canvas>
      </div>
    </section>
  )
}

export default OtherModel