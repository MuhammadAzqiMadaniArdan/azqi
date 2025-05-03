/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
} from "react-feather";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import ShootingStar from "../Components/ShootingStar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
  
    const img = new Image();
    img.src = Profile;
  
    return () => clearTimeout(timer);
  }, []);
  

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
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
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`text-6xl font-bold animate-pulse ${theme === "Day" ? "text-slate-950" : "text-white"}`}
            >
              Hello 👋
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`m-0 p-0 min-w-full lg:h-screen transition-colors duration-500 ease-in-out ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-50"}`}
      >
          {Array.from({ length: 10 }).map((_, i) => (
            <ShootingStar key={i} theme={theme} />
          ))}
        <div
          className={`font-signika-ngt mx-auto px-4 sm:px-6 lg:px-8 h-[85%] transition-colors duration-500 ease-in-out ${
            theme === "Day"
              ? "bg-slate-100 text-slate-950"
              : "bg-slate-950 text-white"
          }`}
        >
      <Header theme={theme} setTheme={setTheme} />

          <main
            className={`flex flex-row-reverse md:flex-row justify-between items-center gap-10 w-full h-auto md:h-[75%] my-20 px-4 ${theme === "Day" ? "text-slate-950" : "text-white"}`}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="container text-container grid gap-4 w-full md:w-3/5"
            >
              <div className="container text-container grid gap-4 ">
                <div className="flex gap-2">
                  <h3
                    className={`text-xl md:text-2xl font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-300"}`}
                  >
                    Hello, it's me
                  </h3>
                  <span className="transition-all  animate-bounce ease-in text-xl md:text-2xl">
                    👋
                  </span>
                </div>
                <h2
                  className={`text-3xl md:text-5xl font-bold ${theme === "Day" ? "text-slate-900" : "text-white"} leading-tight`}
                >
                  Muhammad <span className="text-green-500">Azqi Madani</span>{" "}
                  Ardan
                </h2>

                <p
                  className={`text-lg md:text-2xl font-semibold ${theme === "Day" ? "text-gray-600" : "text-gray-500"}`}
                >
                  I'm a{" "}
                  <ReactTyped
                    strings={[
                      "Game Developer",
                      "Web Developer",
                      "Back-End Developer",
                    ]}
                    typeSpeed={120}
                    backSpeed={80}
                    loop
                    className={`text-xl md:text-2xl font-bold ${theme === "Day" ? "text-slate-900" : "text-white"} leading-tight`}
                  />
                </p>

                <p
                  className={`text-base md:text-lg font-normal ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                >
                  Passionate in creating seamless digital experiences, both on
                  the web and in games.
                </p>

                <div className="mt-4">
                  <a
                    href=""
                    className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium w-fit"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-between w-2/5 gap-20">
              <div className="p-2 snap-center">
                <img
                  src={Profile}
                  alt="profile-image"
                  className="rounded-full object-cover bg-green-400 pt-10 w-full h-full sm:w-full sm:h-full md:w-52 md:h-full lg:w-72 lg:h-full self-center"
                />
              </div>

              <aside className="hidden fixed end-5 lg:grid md:hidden  grid-rows-5 gap-7 font-semibold items-center justify-end  uppercase text-sm  self-center ">
                <a className="group cursor-pointer tracking-widest relative w-auto">
                  Home
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </a>
                <Link
                  to="/about"
                  className="group cursor-pointer tracking-widest relative"
                >
                  About
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>

                <Link
                to="/portfolio"
                 className="group cursor-pointer tracking-widest relative">
                  Portfolio
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>
                <Link
                to="/certificate"
                className="group cursor-pointer tracking-widest relative">
                  Certificate
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>
              </aside>
            </div>

            
          </main>
        </div>

        <Footer theme={theme} />

      </div>
    </>
  );
}

export default Home;
