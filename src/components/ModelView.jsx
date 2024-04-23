import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import * as THREE from 'three'
import Planet from "./Planet"
import Square from "./Square"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function LoadingIndicator() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
}

const ModelView = ({groupRef, gsapType, controlRef, setRotationSize}) => {
  
  const groupRef2  = useRef(new THREE.Group())

  useGSAP(() => {

    const handleScroll = () => {
      gsap.to(groupRef.current.rotation, {
        y: window.scrollY * 0.004, // Adjust the speed of rotation
        ease: 'power2.out', // Choose the easing function

      });
      gsap.to(groupRef.current.position, {
        y: window.scrollY * 0.004, // Adjust the speed of rotation
        ease: 'power2.out', // Choose the easing function,

      });
      gsap.to(groupRef2.current.position, {
        x: window.scrollY * 0.006, // Adjust the speed of rotation
        ease: 'power2.out', // Choose the easing function,

      });
      gsap.to(groupRef2.current.rotation, {
        y: window.scrollY * 0.006, // Adjust the speed of rotation
        ease: 'power2.out', // Choose the easing function,

      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <View
      id={gsapType}
      className='border-2 border-red-500 w-full h-full'
    >
      {/* Amient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0,0,10]} />

      {/* <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}
        enableRotate={false}
      /> */}

      <group ref={groupRef} name="iphone" position={[0, 0 ,0]}>
        {/* <Suspense fallback={<LoadingIndicator />}> */}
          {/* <IPhone 
            scale={[15,15,15]}
            position={[5,0,0]}
          /> */}
          {/* <Planet 
            scale={[0.2, .2 , .2]}
          /> */}
          <Square 
            scale={[.5, .5, .5]}
          />
        {/* </Suspense> */}
        
      </group>
      <group ref={groupRef2} name="iphone" position={[0, 0 ,0]}>
        {/* <Suspense fallback={<LoadingIndicator />}> */}
          {/* <IPhone 
            scale={[15,15,15]}
            position={[5,0,0]}
          /> */}
          {/* <Planet 
            scale={[0.2, .2 , .2]}
          /> */}
          <Square 
            scale={[.5, .5, .5]}
          />
        {/* </Suspense> */}
        
      </group>
    </View>
  )
}

export default ModelView
