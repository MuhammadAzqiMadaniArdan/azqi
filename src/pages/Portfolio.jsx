/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Download, Monitor, Lock } from "react-feather";

import ShootingStar from "../Components/ShootingStar";
import Sidebar from "../Components/Sidebar";
import portfolio1 from "../assets/portfolio/portfolio-Eksis.png";
import CV from "../assets/Cvazqi.pdf";

import Header from "../Components/Header";
import PortfolioSection from "../Components/PortfolioSection";
import Footer from "../Components/Footer";

function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const textClass = (theme) =>
    `text-sm font-light tracking-wide leading-relaxed ${theme === "Day" ? "text-slate-900" : "text-white"}`;

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day";
  });
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="p-0 m-0 bg-slate-950 overflow-hidden">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        active={"Portfolio"}
      />

      <div
        className={`transition-all duration-500 ease-in-out h-full p-5 pb-1 ${showIntro ? "h-screen" : ""} ${
          isExpanded ? "lg:w-7/8" : "w-full lg:pr-[60px]"
        } ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-10"}`}
      >
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50  ${
                theme === "Day" ? "bg-slate-100" : "bg-slate-950"
              }`}
            >
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`text-6xl font-bold animate-pulse ${
                  theme === "Day" ? "text-slate-950" : "text-white"
                }`}
              >
                Portfolio
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Kontainer Utama */}
        <div className="font-signika-ngt mx-auto px-4 sm:px-6 lg:px-8 h-[85%]">
        <div className="hidden lg:block">

{Array.from({ length: 10 }).map((_, i) => (
  <ShootingStar key={i} theme={theme} />
))}
</div>
          <Header theme={theme} setTheme={setTheme} />

          {/* Main Content */}
          <main className="">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 my-20">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full md:w-2/5 grid gap-4"
              >
                <h3
                  className={`text-3xl md:text-4xl font-medium ${theme === "Day" ? "text-gray-600" : "text-white"}`}
                >
                  Portfolio
                </h3>
                <h2
                  className={`text-3xl md:text-5xl font-bold leading-tight ${theme === "Day" ? "text-slate-900" : "text-white"}`}
                >
                  Let Me Show
                  <span className="text-green-500"> My Portfolio</span>
                </h2>
                <div className="mt-4">
                  <a
                    href={CV}
                    download
                    className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium w-fit"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </motion.div>
              <motion.section
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-3/5 grid gap-6 py-10"
                id="about"
              >
                <header className="space-y-2">
                  <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                    <Monitor size={24} />
                    Last Portfolio
                  </div>
                  <p
                    className={`text-base md:text-lg font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                  >
                    EKSIS - Ekstrakulikuler and Seni Budaya Integritas Sistem
                  </p>
                  <hr className="border-gray-400 w-20" />
                </header>

                <div className="space-y-4 text-justify">
                  <div className="relative">
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                        <span className="text-gray-500 font-semibold">
                          Sedang Memuat Gambar...
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={portfolio1}
                      alt="eksis-preview"
                      className={`w-full max-w-md object-contain rounded-lg shadow-md transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
                      onLoad={handleImageLoad}
                    />
                  </div>

                  <p className={textClass(theme)}>
                    A Website using React as Front-End styling with tailwind.css
                    and Laravel as Back-End purpose to make a attendance system
                    ,Achievement system and Activity System{" "}
                  </p>
                  <hr className="border-gray-400 w-20" />
                  <div className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4">
                    <Lock
                      size={24}
                      color="white"
                      className="mr-2 self-center"
                    />
                    <p className="text-white self-center">Private Project</p>
                  </div>
                </div>
              </motion.section>
            </div>
            <section className="portfolio-All">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3
                    className={`text-3xl md:text-4xl font-medium ${theme === "Day" ? "text-gray-600" : "text-white"}`}
                  >
                    Portfolio
                  </h3>
                </div>

                <PortfolioSection theme={theme} />
              </motion.div>
            </section>
          </main>
        </div>
        <Footer theme={theme} />
      </div>
    </section>
  );
}

export default Portfolio;
