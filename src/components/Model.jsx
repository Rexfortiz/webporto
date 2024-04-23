import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import ModelView from './ModelView';
import { useState } from 'react';
import { ScrollTrigger } from 'gsap/all';

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { Scroll, View } from '@react-three/drei';


gsap.registerPlugin(ScrollTrigger)

const Model = () => {

  
  //camera Control
  const cameraControll = useRef()
  
  const object = useRef(new THREE.Group())
  
  //rotation
  const [ rotation, setRotation ] = useState(0)
  
  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity:1, delay:0.8})
  },[]);

  
  return (
    <section className=''>
      <div className='h-96 w-96'>
        <h1 id='heading' className='opacity-0'>Take a closer look</h1>
        <div className='flex flex-col items-center mt-5 h-fit'>
          <div className=' w-[100vh] h-[75vh] md:h-[90vh] overflow-hidden relative'>
            <ModelView
              groupRef={object}
              gsapType="view1"
              controlRef={cameraControll}
              setRotationState={setRotation}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top:0,
                bottom:0,
                left:0,
                right:0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model