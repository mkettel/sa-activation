import { OrbitControls, Text3D, Center, SoftShadows } from '@react-three/drei'

import Lights from './Lights.jsx'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />
        <SoftShadows
          size={11}
          focus={1}
          // near={0.1}
          // far={100}
          // resolution={1024}
          // bias={-0.0001}
          samples={15}
          // frustum={3}
          opacity={0.2}
          // darkness={0.1}
        />

        <Lights />
        <Center position={[0, 1, 0]} >
          <group scale={1.2} >
            <Text3D
              font="./Fontana_Bold.json"
              size={ 1 }
              height={ 0.4 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.01 }
              bevelOffset={ 0 }
              bevelSegments={ 5 }
              letterSpacing={.01}
              castShadow
              >
              social
              <meshStandardMaterial color="#404040" flatShading roughness={2} castShadow />
            </Text3D>
            <Text3D
              font="./Fontana_Bold.json"
              size={ 1 }
              height={ 0.4 }
              curveSegments={ 12 }
              bevelEnabled
              bevelThickness={ 0.02 }
              bevelSize={ 0.01 }
              bevelOffset={ 0 }
              bevelSegments={ 5 }
              letterSpacing={.01}
              castShadow
              position={[3.05, 0, 0]}
              >
              amp
              <meshStandardMaterial color="#f41717" roughness={1.5} flatShading castShadow />
            </Text3D>
          </group>
        </Center>

        <mesh rotation={[0, 0, 0]} position={[0, 0, -0.2]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          {/* <shadowMaterial  opacity={0.5} color={"black"} /> */}
          <meshStandardMaterial color="#F4F5F6" receiveShadow />
        </mesh>

    </>
}
