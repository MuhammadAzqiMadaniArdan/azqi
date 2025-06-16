"use client"

import { useEffect, useState } from "react"
import Profile from "../assets/profile.png"
import { AnimatePresence, motion } from "framer-motion"
import {
  Download,
  Folder,
  GitHub,
  Home,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Server,
  Sun,
  User,
  X,
} from "react-feather"
import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom"
import StarField from "../Components/StarField"
import CV from "../assets/Cvazqi.pdf"
import Navbar from "../Components/Navbar"
import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"

const navItems = [
  { label: "Home", icon: <Home size={20} />, to: "/" },
  { label: "About", icon: <User size={20} />, to: "/about" },
  { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
  { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
]

function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500)

    // Preload image paralel
    const img = new Image()
    img.src = Profile
    img.crossOrigin = "anonymous"

    return () => clearTimeout(timer)
  }, [])

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day"
  })

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={`transition-all duration-500 ease-in-out h-full p-5 pb-1 ${showIntro ? "h-screen" : ""}  ${
          isExpanded ? "lg:w-7/8 lg:pr-[0px]" : "w-full lg:pr-[60px]"
        } ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-10"}`}>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center ${theme === "Day" ? "bg-slate-100" : "bg-slate-950"} z-50`}
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold animate-pulse ${theme === "Day" ? "text-slate-950" : "text-white"}`}
            >
              Hello 👋
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`w-full min-h-screen transition-colors duration-500 ease-in-out ${
          theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white"
        }`}
      >
        {/* Shooting stars background effect */}
        <StarField theme={theme} />

        <div
          className={`font-signika-ngt mx-auto px-4 sm:px-6 lg:px-12 min-h-[85vh] transition-colors duration-500 ease-in-out ${
            theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white"
          }`}
        >
                    <Header theme={theme} setTheme={setTheme} />

          <main
            className={`flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 w-full min-h-[60vh] my-8 md:my-12 ${
              theme === "Day" ? "text-slate-950" : "text-white"
            }`}
          >
            <div className="flex justify-center md:order-2 md:w-2/5 w-full">
              <div className="p-2">
                <img
                  src={Profile || "/placeholder.svg"}
                  alt="profile-image"
                  className=" rounded-full object-cover bg-green-400 w-48 h-48 sm:w-92 sm:h-56 md:w-64 md:h-64 lg:w-52 lg:h-62"
                />
              </div>
            </div>

            {/* Text content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="text-container grid gap-4 w-full md:w-3/5 md:order-1 text-center md:text-left"
            >
              <div className="flex gap-2 justify-center md:justify-start">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-medium ${
                    theme === "Day" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  Hello, it's me
                </h3>
                <span className="transition-all animate-bounce ease-in text-lg sm:text-xl md:text-2xl">👋</span>
              </div>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
                  theme === "Day" ? "text-slate-900" : "text-white"
                } leading-tight`}
              >
                Muhammad <span className="text-green-500">Azqi Madani</span> Ardan
              </h1>

              <p
                className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ${
                  theme === "Day" ? "text-gray-600" : "text-gray-500"
                }`}
              >
                I'm a{" "}
                <ReactTyped
                  strings={["Game Developer", "Web Developer", "Back-End Developer"]}
                  typeSpeed={120}
                  backSpeed={80}
                  loop
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${
                    theme === "Day" ? "text-slate-900" : "text-white"
                  } leading-tight`}
                />
              </p>

              <p
                className={`text-sm sm:text-base md:text-lg font-normal ${
                  theme === "Day" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Passionate in creating seamless digital experiences, both on the web and in games.
              </p>

              <div className="mt-4 flex justify-center md:justify-start">
                <a
                  href={CV}
                  download
                  className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-4 py-2 text-sm font-medium w-fit"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </motion.div>

            <Sidebar
        theme={theme}
        setTheme={setTheme}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        active={"Home"}
      />
          </main>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 text-xl font-bold ${
              theme === "Day" ? "bg-slate-200 text-gray-600" : "bg-slate-950 text-white"
            }`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-md bg-green-500 text-white"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer hover:text-green-400 flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "Day" ? "Night" : "Day")}
              className="p-2 cursor-pointer rounded-full transition-colors duration-300 text-green-500 mt-4"
              aria-label="Toggle Theme"
            >
              {theme === "Day" ? (
                <div className="flex items-center gap-2">
                  <Moon size={24} /> Night Mode
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sun size={24} /> Day Mode
                </div>
              )}
            </button>
          </div>
        )}

        {/* Footer - made responsive */}
        <footer className="flex justify-center md:justify-end w-full py-6">
          <p
            className={`uppercase py-1 px-3 sm:px-5 bg-green-500 rounded-l-full md:rounded-l-full font-semibold text-xs sm:text-sm ${
              theme === "Day" ? "text-white" : "text-gray-900"
            }`}
          >
            copyright © 2025 Muhammad Azqi Madani Ardan
          </p>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
