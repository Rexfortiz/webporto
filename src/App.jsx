import Navbar from "./components/Navbar"
import ProfileHero from "./components/ProfileHero"
import Model from "./components/Model"
import OtherModel from './components/OtherModel'
import { Canvas, useFrame } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { Test2 } from "./components/Test2"
import { useRef } from "react"


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
