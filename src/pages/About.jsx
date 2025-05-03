import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import { UserCheck, Monitor } from "react-feather";

// import ShootingStar from "../Components/ShootingStar";
import Sidebar from "../Components/Sidebar";
import Wikrama from "../assets/wikramalogo.png";
import Dihostingin from "../assets/dihostingin.png";
import CV from "../assets/Cvazqi.pdf";
// import InfiniteScrollLanguages from "../Components/InfiniteScrollLanguage";

import Services from "../Components/Services";
import Career from "../Components/Career";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function About() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  const textClass = (theme) =>
    `text-sm font-light tracking-wide leading-relaxed ${theme === "Day" ? "text-slate-900" : "text-white"}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="p-0 m-0 bg-slate-950">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        active={"About"}
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
              className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 ${
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
                About
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="font-signika-ngt mx-auto px-4 sm:px-6 lg:px-8 h-[85%]">
          {/* <div className="hidden lg:block">
            {Array.from({ length: 10 }).map((_, i) => (
              <ShootingStar key={i} theme={theme} />
            ))}
          </div> */}

          <Header theme={theme} setTheme={setTheme} />

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
                  About Me
                </h3>
                <h2
                  className={`text-3xl md:text-5xl font-bold leading-tight ${theme === "Day" ? "text-slate-900" : "text-white"}`}
                >
                  Let Me{" "}
                  <span className="text-green-500">Introduce Myself</span>
                </h2>
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
                    <UserCheck size={24} />
                    Who I Am?
                  </div>
                  <p
                    className={`text-base md:text-lg font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                  >
                    Short Story About Me
                  </p>
                  <hr className="border-gray-400 w-20" />
                </header>

                <div className="space-y-4 text-justify">
                  <p className={textClass(theme)}>
                    I am a graduate of SMK Wikrama Bogor, majoring in Software
                    and Game Development. I specialize in Back End and Web
                    Development using Laravel, PHP, JavaScript, and Node.js, and
                    also work with React to create modern, responsive user
                    interfaces. Most of my web projects are built using a
                    Laravel and React stack to ensure both efficiency and
                    scalability.
                  </p>
                  <p className={textClass(theme)}>
                    In addition to web development, I develop games using Unity
                    and C#, from simple prototypes to more complex gameplay
                    systems. I believe technology is a powerful tool to solve
                    real-world problems, and I’m committed to continuous
                    learning, staying up-to-date with trends, and contributing
                    to innovative teams.
                  </p>
                  <hr className="border-gray-400 w-20" />
                  <q className={textClass(theme)}>
                    The best people are those who are useful to others
                  </q>
                </div>
              </motion.section>
            </div>
            <Career
              CV={CV}
              Wikrama={Wikrama}
              Dihostingin={Dihostingin}
              theme={theme}
            />
            <section className="skills my-10">
              <div>
                <div className="flex justify-between my-5">
                  <h3
                    className={`text-3xl md:text-4xl font-medium ${
                      theme === "Day" ? "text-gray-600" : "text-white"
                    }`}
                  >
                    Skills
                  </h3>
                  <Monitor className="items-center content-center self-center" />
                </div>
                {/* <InfiniteScrollLanguages /> */}
              </div>
            </section>
            <Services theme={theme} />
          </main>
        </div>
        <Footer theme={theme} />
      </div>
    </section>
  );
}

export default About;
