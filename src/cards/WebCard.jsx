import { Image } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { BentPlaneGeometry } from '../components/util'
import { easing } from 'maath'

const WebCard = ({ select, url, ...props }) => {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [isSelect, setIsSelect] = useState(null)

  

  useEffect(() => {
    setIsSelect(select)
  })
  
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {

    easing.damp3(ref.current.scale, hovered || isSelect ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'zoom', hovered || isSelect ? 0.8 : 1, 0.2, delta)
    easing.damp(ref.current.material, 'radius', hovered || isSelect ? 3 : 2, 0.2, delta)
  })

  return (
    <>
      <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
        {/* <mesh geometry={geometry}  /> */}
        <bentPlaneGeometry args={[0.1, 20, 20, 20, 20]} />
      </Image>
    </>
  )
}

export default WebCard