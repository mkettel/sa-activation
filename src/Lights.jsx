import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath"


export default function Lights()
{

    const lightRef = useRef()
    useFrame((state, delta) => {
      easing.dampE(lightRef.current.position, [(state.pointer.x * 0.6), (state.pointer.y * 0.7), 0], 0.2, delta)

      // spin the light around with time slowly
      // lightRef.current.rotation.z += 0.1 * delta
    })

    return <>

        <group ref={lightRef}>
          <directionalLight castShadow position={[ -8, 0.5, 2 ]} intensity={5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight>
          {/* <pointLight intensity={ 6 } position={[-0.1, -0.1, 8]} /> */}
          <rectAreaLight color={"white"} intensity={ 3 } position={ [ -9, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2.5, 0]} />
          <rectAreaLight intensity={ 6 } position={ [ 10, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, Math.PI / 2.5, 0]} />
        </group>


        {/* Ambient light can help control the darkness of the shadow */}
        {/* <ambientLight intensity={ 0.1 } /> */}
    </>
}
