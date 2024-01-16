/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Logo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/3D_Card.glb");
  const { actions } = useAnimations(animations, group);

  // increase metalness and decrease roughness
  materials.SVGMat.metalness = 1
  materials["SVGMat.001"].metalness = 1
  materials["SVGMat.002"].metalness = 1
  materials["SVGMat.001"].metalness = 0.5
  materials["SVGMat.001"].roughness = 0.5
  materials["SVGMat.001"].toneMapped = false
  materials["SVGMat.002"].metalness = 0.5
  materials["SVGMat.002"].roughness = 0.5
  materials["SVGMat.002"].toneMapped = false
  materials["SVGMat.003"].metalness = 0.5
  materials["SVGMat.003"].roughness = 0.5
  materials["SVGMat.003"].toneMapped = false

  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          roughness={0.5}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve001"
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials.SVGMat}
          roughness={0.5}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve002"
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.SVGMat}
          roughness={0.5}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve003"
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={materials.SVGMat}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={materials.SVGMat}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve005"
          castShadow
          receiveShadow
          geometry={nodes.Curve005.geometry}
          material={materials.SVGMat}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve006"
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          material={materials["SVGMat.001"]}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve007"
          castShadow
          receiveShadow
          geometry={nodes.Curve007.geometry}
          material={materials["SVGMat.002"]}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
        <mesh
          name="Curve008"
          castShadow
          receiveShadow
          geometry={nodes.Curve008.geometry}
          material={materials["SVGMat.003"]}
          position={[0, 0.058, 0]}
          scale={4.225}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D_Card.glb");
