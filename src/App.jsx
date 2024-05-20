import Navbar from "./components/Navbar"
import { Canvas, useFrame } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Test2 } from "./components/Test2"


//position: [490, 180, 0] camera position for rotate

const App = () => {


  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 64,
          position: [20, 50, 350],
        }}
      >
        <Test2 />
        {/* <Experience /> */}
      </Canvas>
    </>
  )
}

export default App
