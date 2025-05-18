"use client"

import { useEffect, useState } from "react"
import ShootingStar from "./ShootingStar"

const StarField = ({ theme }) => {
  const [starCount, setStarCount] = useState(0)

  // Determine star count based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Adjust number of stars based on screen width
      if (window.innerWidth < 768) {
        setStarCount(3) // Fewer stars on mobile
      } else if (window.innerWidth < 1280) {
        setStarCount(6) // Medium amount on tablets
      } else {
        setStarCount(10) // More stars on desktop
      }
    }

    // Initial setup
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: starCount }).map((_, i) => (
        <ShootingStar key={i} theme={theme} />
      ))}
    </div>
  )
}

export default StarField
