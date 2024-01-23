import { OrbitControls, Text3D, Center, SoftShadows, Environment } from '@react-three/drei'
import Lights from './Lights.jsx'
import Logo from './Logo.jsx'

export default function Experience()
{
    return <>

        {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} /> */}
        {/* <OrbitControls makeDefault /> */}
        <SoftShadows
          size={8}
          focus={9}
          // near={0.1}
          // far={100}
          // resolution={1024}
          // bias={-0.0001}
          samples={20}
          opacity={0.9}
          toneMapped={false}
        />

        <Lights />
        <Center position={[0, 0.8, 0]} >
          <group scale={5.7} rotation={[Math.PI / 2, 0, 0]}>
            <Logo />
          </group>
        </Center>

        <Environment preset="city"   />

        {/* Wall behind the Logo */}
        <mesh rotation={[0, 0, 0]} position={[0, 0, 0.05]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial  opacity={0.5} color={"black"} />
          <meshStandardMaterial color="#F4F5F6" receiveShadow />
        </mesh>

    </>
}
