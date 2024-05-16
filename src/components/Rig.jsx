import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'

const Rig = (props) => {
  const ref = useRef()

  useFrame((state, delta) => {
    // Rotate contents based on pointer x-axis movement
    ref.current.rotation.y = -state.pointer.x * (Math.PI * 2)

    // Adjust camera movement based on pointer movement
    const targetPosition = [
      -state.pointer.x * 2,  // Adjust x position based on pointer x movement
      state.pointer.y * 2 + 1.5, // Adjust y position based on pointer y movement
      10 // Keep z position constant
    ]
    easing.damp3(state.camera.position, targetPosition, 0.3, delta) // Move camera
  })

  return <group ref={ref} {...props} />
}

export default Rig
