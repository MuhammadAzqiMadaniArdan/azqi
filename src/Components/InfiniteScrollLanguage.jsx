"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiUnity,
} from "react-icons/si"

const InfiniteScrollLanguages = ({ theme = "Day" }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)

  const languages = [
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "PHP", icon: <SiPhp size={40} /> },
    { name: "React", icon: <SiReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
    { name: "Unity", icon: <SiUnity size={40} /> },
    { name: "HTML5", icon: <SiHtml5 size={40} /> },
    { name: "CSS3", icon: <SiCss3 size={40} /> },
    { name: "Laravel", icon: <SiLaravel size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  ]

  // Duplicate the languages array to create a seamless loop
  const duplicatedLanguages = [...languages, ...languages]

  useEffect(() => {
    // Calculate the width of the carousel
    const updateWidth = () => {
      if (carousel.current) {
        // We only need the width of the first set of items
        const itemWidth = carousel.current.scrollWidth / 2
        setWidth(itemWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent"></div>

      <motion.div className="flex w-full overflow-hidden" ref={carousel}>
        <motion.div
          className="flex gap-8"
          animate={{ x: -width }}
          transition={{
            x: {
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        >
          {duplicatedLanguages.map((lang, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-w-[120px]">
              <div
                className={`text-4xl ${theme === "Day" ? "text-gray-800" : "text-gray-200"} transition-colors duration-300`}
              >
                {lang.icon}
              </div>
              <p
                className={`text-sm mt-2 ${theme === "Day" ? "text-gray-700" : "text-gray-300"} transition-colors duration-300`}
              >
                {lang.name}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default InfiniteScrollLanguages
