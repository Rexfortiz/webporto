import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/models/ps_square.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

export default Model;

useGLTF.preload('/models/ps_square.glb')