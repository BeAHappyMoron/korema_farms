/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 cucumber.gltf 
Author: bemute (https://sketchfab.com/bemute)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cucumber-d314a5dd83224b9aa502636bb1bc51ff
Title: Cucumber
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cucumber.gltf')
  return (
    <group {...props} dispose={null} scale={[50, 50, 50]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['cucumber_LP.1001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/cucumber.gltf')
