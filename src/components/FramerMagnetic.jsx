import { motion } from "framer-motion"
import { useState, useRef } from "react"


export default function FramerMagnetic({children}) {

  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const mouseMove = (e) => {

    const { clientX, clientY } = e;

      const {height, width, left, top} = ref.current.getBoundingClientRect();

      const middleX = clientX - (left + width/2)

      const middleY = clientY - (top + height/2)

      setPosition({x: middleX, y: middleY})
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
      transition={{type: "spring", stiffness: 250, damping: 15, mass: 0.1}}
      className="framer-magnetic"
    >
      {
        children
      }

    </motion.div>
  </>
}
