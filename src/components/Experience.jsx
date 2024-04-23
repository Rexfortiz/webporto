import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"
import Overlay from "./Overlay"
import { Girl } from "./Girl"

export const Experience = () => {
  return(
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        {/* <Girl /> */}
        <Office />
      </ScrollControls>
    </>
  )
}