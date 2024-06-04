
import { Canvas } from "@react-three/fiber"
import { Test2 } from "./components/Test2"
import { Suspense, useEffect, useState } from "react"
import Loading from "./components/Loading"




const App = () => {

    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      console.log(windowSize.width)
  
    }, [windowSize]);
    
//render mobile mode ketika width lebih kecil dari sekian


  return (
    <>
    {}
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
        {/* <Experience /> */}
      </Canvas>
    </>
  )
}

export default App
