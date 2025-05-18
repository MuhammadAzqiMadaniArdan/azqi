"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const ShootingStar = ({ theme }) => {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(-50)
  const [xDirection, setXDirection] = useState(1)
  const [duration, setDuration] = useState(0)
  const [key, setKey] = useState(0)
  const [size, setSize] = useState(2)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1000,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  })

  // Initialize star properties
  useEffect(() => {
    // Safe initialization for window properties
    if (typeof window !== "undefined") {
      initStar()

      // Add resize listener
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [windowSize.width, windowSize.height])

  const initStar = () => {
    setLeft(Math.random() * windowSize.width)
    setTop(-50)
    setXDirection(Math.random() > 0.5 ? 1 : -1)
    setDuration(Math.random() * 4 + 3)
    setSize(Math.random() * 3 + 2)
    setKey((prev) => prev + 1)
  }

  const triggerNewStar = () => {
    setTimeout(() => {
      initStar()
    }, Math.random() * 1000) // Random delay for more natural effect
  }

  return (
    <motion.div
      key={key}
      initial={{ x: left, y: top, opacity: 0 }}
      animate={{
        x: left + xDirection * 300,
        y: windowSize.height * 0.6, // Only animate to 60% of screen height
        opacity: [0, 1, 0.8, 0], // Fade in and out
      }}
      transition={{
        duration,
        ease: "easeInOut",
        opacity: { duration: duration * 0.8 }, // Fade out before reaching the end
      }}
      onAnimationComplete={triggerNewStar}
      className="pointer-events-none" // Ensure it doesn't interfere with clicks
      style={{
        position: "absolute",
        left: `${left}px`,
        top: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: theme === "Day" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.7)",
        boxShadow:
          theme === "Day" ? `0 0 ${size * 2}px rgba(0, 0, 0, 0.3)` : `0 0 ${size * 2}px rgba(255, 255, 255, 0.5)`,
        zIndex: 0, // Place behind content
      }}
    />
  )
}

export default ShootingStar
