/* const React = require('react');
const { useGLTF } = require('@react-three/drei');
const gltf = require('../static/gameboy.glb');
const THREE = require('three');
 */

import React from 'react';
import { useGLTF } from '@react-three/drei';
import gltf from "../static/gameboy.glb";
import * as THREE from 'three';

function Gameboy(props) {
  const { nodes, materials } = useGLTF(gltf)

  console.log(materials);

  if(props.palette.transparent){
    materials.Base.opacity = 0.8;
  }else{
    materials.Base.opacity = 1;
  }
  materials.Base.transparent = true;
  materials.logo.transparent = true;
  materials.logo.opacity = 0.95;
  materials.Base.color = new THREE.Color(`rgb(${props.palette.bodyR},${props.palette.bodyG},${props.palette.bodyB})`);
  materials.button.color = new THREE.Color(`rgb(${props.palette.buttonR},${props.palette.buttonG},${props.palette.buttonB})`);
  materials.dpad.color = new THREE.Color(`rgb(${props.palette.dPadR},${props.palette.dPadG},${props.palette.dPadB})`);
  materials.dpadBase.color = new THREE.Color(`rgb(${props.palette.dPadR},${props.palette.dPadG},${props.palette.dPadB})`);
  materials.rubberButton.color = new THREE.Color(`rgb(${props.palette.rubberR},${props.palette.rubberG},${props.palette.rubberB})`);
  //nodes.shell_front.visible = false;
  //nodes.lcdpcb.renderOrder = 1;

  return (
    <group dispose={null}>
      <group position={[-0.04, 1.31, 0.01]} scale={[1.45, 1.23, 0.02]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.plasticDetailsBlack} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.mainBoardFront} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.mainBoardBack} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.plasticDetailsWhite} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials.metall} />
      </group>
      <group position={[0, -0.15, 0.15]} scale={[1, 1, 0.23]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.lcdPcbBack} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.lcdPcbFront} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.lcdPcbBase} />
        <mesh geometry={nodes.Cube004_3.geometry} material={materials.plasticDetailsBlack} />
      </group>
      <mesh geometry={nodes.b.geometry} material={materials.button} position={[0.57, -0.93, 0.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.91} />
      <mesh geometry={nodes.cover.geometry} material={materials.Base} position={[-0.12, -2.24, -0.63]} />
      <mesh geometry={nodes.shell_front.geometry} material={materials.Base} position={[-0.09, -0.83, 0.22]} />
      <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[-0.43, 0.02, 0.48]} />
      <group position={[-0.02, 1.17, 0.44]} scale={[0.99, 0.99, 0.03]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.lens} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.lensWindow} />
      </group>
      <group position={[-0.93, -0.85, 0.43]} scale={0.12}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.dpad} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.dpadBase} />
      </group>
      <mesh geometry={nodes.a.geometry} material={materials.button} position={[1.07, -0.69, 0.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.91} />
      <mesh geometry={nodes.select.geometry} material={materials.rubberButton} position={[-0.46, -1.6, 0.48]} rotation={[0, 0, 0.46]} scale={[0.94, 0.94, 0.29]} />
      <mesh geometry={nodes.start.geometry} material={materials.rubberButton} position={[0.07, -1.6, 0.48]} rotation={[0, 0, 0.46]} scale={[0.93, 0.93, 0.29]} />
      <mesh geometry={nodes.shell_back.geometry} material={materials.Base} position={[-0.09, -0.83, 0.22]} />
    </group>
  )
}

export default Gameboy;

useGLTF.preload(gltf)
