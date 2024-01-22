import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath"
import { clamp } from 'three/src/math/MathUtils'; // Import the clamp function from Three.js
import { AccumulativeShadows, Environment, RandomizedLight } from '@react-three/drei'

export default function Lights()
{

    const lightRef = useRef()

    // Define the maximum range for the light movement
    const maxRangeX = 5; // Max distance in the X direction
    const maxRangeY = 5; // Max distance in the Y direction

    useFrame((state, delta) => {
        // Clamp the mouse position to the maximum range
        const clampedX = clamp(state.pointer.x * 2.3, -maxRangeX, maxRangeX);
        const clampedY = clamp(state.pointer.y * 1.7, -maxRangeY, maxRangeY);

        // Use the clamped values for the light position
        easing.dampE(lightRef.current.position, [clampedX, clampedY, 0], 0.5, delta);
    });

    return <>

        <group ref={lightRef}>
          <directionalLight castShadow position={[ -8, 1.5, 3 ]} intensity={5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight>
          <pointLight  position={[-3.9, 0.7, 7 ]} power={100} decay={1.4} />
          <rectAreaLight color={"white"} intensity={ 3 } position={ [ -9, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2.5, 0]} />
          <rectAreaLight intensity={ 1 } position={ [ 10, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, Math.PI / 2.5, 0]} />
        </group>

        {/* <group ref={lightRef} >
          <directionalLight  position={[ -8, 1.5, 3 ]} intensity={1.5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight>
          <rectAreaLight color={"white"} intensity={ 3 } position={ [ -9, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2.5, 0]} />
          <rectAreaLight intensity={ 1 } position={ [ 10, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, Math.PI / 2.5, 0]} />
          <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
            <RandomizedLight amount={8}  radius={5} ambient={0.5} position={[0, 3, 2]} bias={0.001} />
          </AccumulativeShadows>
        </group> */}
    </>
}
