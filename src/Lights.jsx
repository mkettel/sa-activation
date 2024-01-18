import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath"


export default function Lights()
{

    const lightRef = useRef()
    useFrame((state, delta) => {

      const dampingFactor = 0.5;
      easing.dampE(lightRef.current.position, [(state.pointer.x * 2.9), (state.pointer.y * 1.2), 0], dampingFactor, delta)

      // spin the light around with time slowly
      // lightRef.current.rotation.z += 0.1 * delta
    })

    return <>

        <group ref={lightRef}>
          <directionalLight castShadow position={[ -8, 1.5, 3 ]} intensity={5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight>
          <pointLight  position={[-3.9, 0.7, 7 ]} power={100} decay={1.4} />
          <rectAreaLight color={"white"} intensity={ 3 } position={ [ -9, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2.5, 0]} />
          <rectAreaLight intensity={ 6 } position={ [ 10, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, Math.PI / 2.5, 0]} />
        </group>
    </>
}
