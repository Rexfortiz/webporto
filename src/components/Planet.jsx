import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

function Model(props){
  const { nodes, materials } = useGLTF('/models/planet.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={nodes.Torus.material}
          position={[0.761, -4.23, 67.815]}
          rotation={[-1.299, -0.269, 0.074]}
          scale={[1, 1, 0.211]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[0, 0, 68.863]}
          scale={[1.484, 1.47, 1.472]}
        />
        <pointLight
          intensity={2.3}
          decay={2}
          distance={10000}
          color="#ff9600"
          position={[-241.594, -202.372, 94.36]}
        />
        <pointLight
          intensity={2}
          decay={2}
          distance={10000}
          color="#009bff"
          position={[210.503, 225.669, -24.396]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle.geometry}
          material={nodes.Rectangle.material}
          position={[0, 0, -102]}
        />
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[0, 0, 1000]}>
          <directionalLight intensity={0.75} decay={2} rotation={[-0.7, 0.648, 0.949]} />
        </OrthographicCamera>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-81.4, 98.334, 1001.622]}
          rotation={[-0.062, -0.042, -0.003]}
        />
      </group>
    </group>
  )
}

export default Model;

useGLTF.preload('/models/planet.glb')