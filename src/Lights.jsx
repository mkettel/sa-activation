import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath"
import { clamp } from 'three/src/math/MathUtils'; // Import the clamp function from Three.js
import { AccumulativeShadows, Environment, RandomizedLight, SpotLight } from '@react-three/drei'

export default function Lights()
{

    const lightRef = useRef()

    const [deviceOrientation, setDeviceOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });

    useEffect(() => {
      const handleOrientation = (event) => {
        const { alpha, beta, gamma } = event;
        setDeviceOrientation({ alpha, beta, gamma });
      }

      window.addEventListener('deviceorientation', handleOrientation)

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation)
      }
    }, [])

    // Define the maximum range for the light movement
    const maxRangeX = 2; // Max distance in the X direction
    const maxRangeY = 2; // Max distance in the Y direction

    useFrame((state, delta) => {

        // only use if on mobile
        if (window.innerWidth < 600) {
          const factorX = deviceOrientation.gamma / 90; // rotation around the y-axis (in degrees), [-90,90]
          const factorY = deviceOrientation.beta / 180; // rotation around the x-axis (in degrees), [-180,180]

           // Calculate new position based on device orientation
          const newX = clamp(factorX * maxRangeX, -maxRangeX, maxRangeX);
          const newY = clamp(factorY * maxRangeY, -maxRangeY, maxRangeY);

           // Update light position
          // lightRef.current.position.x = newX;
          // lightRef.current.position.y = newY;
          // Use the clamped values for the light position
          easing.dampE(lightRef.current.position, [newX, newY, 0], 0.5, delta);
        } else {

          // Clamp the mouse position to the maximum range
          const clampedX = clamp(state.pointer.x * -0.3, -maxRangeX, maxRangeX);
          const clampedY = clamp(state.pointer.y * -1.2, -maxRangeY, maxRangeY);

          // Use the clamped values for the light position
          easing.dampE(lightRef.current.position, [clampedX, clampedY, 0], 0.5, delta);
        }
    });

    return <>

        <group ref={lightRef}>
          {/* <directionalLight castShadow position={[ -8, 1.5, 3 ]} intensity={5} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
          </directionalLight> */}
          <SpotLight castShadow position={[ -5, 1.2, 2 ]} attenuation={.01} anglePower={2} distance={25} angle={2.5} intensity={39} shadow-mapSize={1024} />
          {/* <rectAreaLight castShadow color={"white"} intensity={ 7 } position={ [ -9, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, -Math.PI / 2.5, 0]} /> */}
          {/* <rectAreaLight intensity={ 0.5 } position={ [ 7, 0.5, 2 ] } width={ 3 } height={ 6 } rotation={[0, Math.PI / 2.5, 0]} /> */}
          {/* <ambientLight intensity={0.2} /> */}
        </group>

        {/* <pointLight position={[-3.4, 0.7, 7 ]} power={10} decay={1.4} /> */}
    </>
}
