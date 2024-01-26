import { OrbitControls, Text3D, Center, SoftShadows, Environment } from '@react-three/drei'
import Lights from './Lights.jsx'
import Logo from './Logo.jsx'
import { useState, useEffect } from 'react'

export default function Experience()
{

  const [scale, setScale] = useState(5.7)
  const [logoPosition, setLogoPosition] = useState([0, 0.8, 0])

  // Resize the logo on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScale(2.7)
        setLogoPosition([0, 0.4, 0.1])
      } else {
        setScale(5.7)
        setLogoPosition([0, 0.8, 0])
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])


    return <>

        {/* <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} /> */}
        <SoftShadows
          size={8}
          focus={9}
          samples={20}
          opacity={0.9}
          toneMapped={false}
        />

        <Lights />
        <Center position={logoPosition} >
          <group scale={scale} rotation={[Math.PI / 2, 0, 0]}>
            <Logo />
          </group>
        </Center>

        {/* Change to custom Env map for production */}
        <Environment
          files="./env/overcast.hdr"
          background={false}
          blur={1}
          />
          {/* <Environment preset="city" background={false} /> */}

        {/* Wall behind the Logo */}
        <mesh rotation={[0, 0, 0]} position={[0, 0, 0.05]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          {/* <shadowMaterial  opacity={0.5} color={"black"} /> */}
          <meshStandardMaterial color="#F4F5F6" receiveShadow envMapIntensity={0.6}/>
        </mesh>

    </>
}
