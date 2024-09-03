
import { Canvas } from "@react-three/fiber"
import { Test2 } from "./components/Test2"
import { Suspense, useEffect, useState } from "react"
import Loading from "./components/Loading"
import MobileApp from "./Mobile/MobileApp"
import { FloatingNav } from "./components/ui/floating-navbar"

const App = () => {

  const [ isMobile, setIsMobile ] = useState(null)
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
    windowSize.width <= 1780 ? setIsMobile(true) : setIsMobile(false)
    console.log(isMobile)
    console.log(windowSize.width)
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [windowSize]);

  const navItems = [
    {
      name: "Tech stack",
      link: "#tech-mobile",
      
    },
    {
      name: "Web",
      link: "#webporto-mobile",
      
    },
    {
      name: "Game",
      link: "#gameporto-mobile",
    },
    {
      name: "About",
      link: "#about-mobile",

    },
  ];

  return (
    <>
      {
        isMobile ?
        <Suspense fallback={<Loading />} >
          <FloatingNav navItems={navItems}/>
          <MobileApp />
        </Suspense>
        
        :
        <Canvas
          shadows
          camera={{
            fov: 64,
            position: [20, 50, 350],
          }}
        >
          <Suspense fallback={<Loading />} >
            <Test2 /> 
          </Suspense>
        </Canvas>
      }
    </>
  )
}

export default App
