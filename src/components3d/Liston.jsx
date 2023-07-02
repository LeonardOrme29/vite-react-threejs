import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Liston(props) {
  const { nodes, materials } = useGLTF('public/models/liston.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pipi.geometry} material={materials.Mat} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('public/models/liston.glb')
