import React, { useRef } from 'react';
import * as THREE from 'three';

export default function RectangleMesh() {
  const ref = useRef();

  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  });

  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);

  return <primitive ref={ref} object={mesh} />;
}