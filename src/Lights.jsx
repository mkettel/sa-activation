import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath"


export default function Lights()
{

    const lightRef = useRef()
    useFrame((state, delta) => {
      easing.dampE(lightRef.current.position, [(state.pointer.x * 0.5), (state.pointer.y * 0.3), 0], 0.2, delta)
      // easing.dampE(state.camera.position, [(state.pointer.x * 0.9), (state.pointer.y * 0.9), 8], 0.2, delta)
    })

    return <>

        <group ref={lightRef}>
          <directionalLight castShadow position={[-6.0, 1.0, 1.8]} intensity={3} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight>
        <rectAreaLight intensity={ 6 } position={ [ -8, 1, 0 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2, 0]} />
        </group>


        {/* Ambient light can help control the darkness of the shadow */}
        <ambientLight intensity={ 0.2 } />
    </>
}
