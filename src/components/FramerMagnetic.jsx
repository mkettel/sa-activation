import { motion } from "framer-motion"
import { useState, useRef } from "react"


export default function FramerMagnetic({children}) {

  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e) => {

    const { clientX, clientY } = e; // Destructure the clientX and clientY properties from the event parameter

      // Get the position of the element relative to the viewport
      const {height, width, left, top} = ref.current.getBoundingClientRect();

      // Get the position of the cursor relative to the element in the X axis
      const middleX = clientX - (left + width/2)

      // Get the position of the cursor relative to the element in the Y axis
      const middleY = clientY - (top + height/2)

      setPosition({x: (middleX * 0.5), y: middleY})
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return <>
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{x, y}}
      transition={{type: "spring", stiffness: 250, damping: 25, mass: 0.9}}
      className="framer-magnetic"
    >
      {
        children
      }

    </motion.div>
  </>
}
