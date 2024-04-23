import { OrbitControls, ScrollControls, SpotLight, ContactShadows, useHelper } from "@react-three/drei"
import { Cyberpunk } from "./Cyberpunk-hd"
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

import gsap from 'gsap';
import ContentOverlay from "./ContentOverlay"
import IntroductionModel from "./IntroductionModel"

export const Test2 = () => {

  //Lights Ref
  const mainSpotLight = useRef();
  const mainSpotLightTarget = useRef();
  const sideSpotLight = useRef();
  const sideSpotLightTarget = useRef();
  const midPointLight = useRef();
  const midPointLightTarget = useRef();
  const glassref = useRef();
  const topSpotLight = useRef();

  //useRef for models
  const model = useRef();
  const textIntro = useRef();

  const scroll = useScroll()
  const tl = useRef();
  // useHelper(mainSpotLight, SpotLightHelper, "red")

  useEffect(() => {
    mainSpotLight.current.target = mainSpotLightTarget.current;
    sideSpotLight.current.target = sideSpotLightTarget.current;
    midPointLight.current.target = midPointLightTarget.current;
  }, []);

  useFrame(() => {
    // tl.current.seek(scroll.offset * tl.current.duration())
    // console.log(scroll)

    
  },[])

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    gsap.from(
      model.current.position, {
        duration: 1.5,
        x: 0,
        y: 0.1,
        ease: "power2"
      },
    );
  },[])


  const texture = useLoader(TextureLoader, '/images/intro.png');

  return(
    <>
      <group position={[30,-190,50]} rotation={[0,-0.25,0]} ref={model}>
        <ambientLight intensity={0.2} />
        <SpotLight
          name="middle Spotlight"
          position={[200, 90, 25]}  
          penumbra={1} 
          decay={0} 
          intensity={5} 
          color="#ffb0cd"
          distance={600}
          angle={0.8}
          castShadow
          ref={midPointLight}
          shadow-mapSize-width={500}
          shadow-mapSize-height={500}
          shadow-bias={-0.001}
        />
        <SpotLight 
          name="mainSpotlight"
          position={[-172, -60.5, -274]}
          penumbra={0.3} 
          decay={0} 
          intensity={9} 
          color="#EE8A3E"
          distance={500}
          angle={1.1}
          ref={mainSpotLight}
          castShadow
          shadow-mapSize-width={500}
          shadow-mapSize-height={500}
          shadow-bias={-0.00006}
        />
        <SpotLight 
          name="sideSpotlight"
          position={[145, -61.5, 224]}
          penumbra={0.3} 
          decay={0} 
          intensity={9} 
          color="#e6aa20"
          distance={500}
          angle={1.2}
          ref={sideSpotLight}
          castShadow
          shadow-mapSize-width={500}
          shadow-mapSize-height={500}
          shadow-bias={-0.00029}
        />

        <SpotLight 
          name="sideSpotlight"
          position={[-80,230, 244]}
          penumbra={0.3} 
          decay={0} 
          intensity={2} 
          color="#e6aa20"
          distance={500}
          angle={1.2}
          
          castShadow
          shadow-mapSize-width={500}
          shadow-mapSize-height={500}
          shadow-bias={-0.00029}
        />
        
        <group>
          <mesh name="main Spotlight Target" ref={mainSpotLightTarget} position={[-155, -250, -210]}>
            {/* <boxGeometry args={[10, 10, 10]} />
            <meshBasicMaterial color="blue" transparent opacity={0.5} /> */}
          </mesh>
          <mesh name="side Spotlight Target" ref={sideSpotLightTarget} position={[145, -250, 224]}>
            {/* <boxGeometry args={[10, 10, 10]} />
            <meshBasicMaterial color="blue" transparent opacity={0.5} /> */}
          </mesh>
          <mesh name="mid Spotlight Target" ref={midPointLightTarget} position={[-150, -290, 25]}>
            {/* <boxGeometry args={[10, 10, 10]} />
            <meshBasicMaterial color="blue" transparent opacity={0.5} /> */}
          </mesh>
          <mesh position={[0,-200,0]} >
            <boxGeometry args={[2000,0.1, 2000]}/>
            <meshStandardMaterial color="#141414" />
          </mesh>
        </group>

        

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}  />
        
        <ScrollControls pages={3} damping={0.25}>
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