/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Download } from "react-feather";

import ShootingStar from "../Components/ShootingStar";
import Sidebar from "../Components/Sidebar";
import certificate1 from "../assets/certificate/figma-ui-all-1.png";
import certificate2 from "../assets/certificate/Ux-designAll-1.png";
import certificate3 from "../assets/certificate/sertifikat-backend-1.png";
import certificate4 from "../assets/certificate/sertifikat-frontend-1.png";
import certificate5 from "../assets/certificate/sertifikat-cyberLabs.png";
import certificate6 from "../assets/certificate/sertifikat-wanteknologi.jpg";
import certificate7 from "../assets/certificate/sertifikat-js-1.png";
import certificate8 from "../assets/certificate/sertifikat-Git-1.png";
import certificate9 from "../assets/certificate/sertifikat-python-1.png";
import certificate10 from "../assets/certificate/sertifikat-K3.jfif";
import certificate11 from "../assets/certificate/sertifikat-ggj.png";
import certificate12 from "../assets/certificate/sertifikat-UnityEssential-1.png";
import certificate13 from "../assets/certificate/sertifikat-igdx.png";
import certificate14 from "../assets/certificate/sertifikat-meneliti-karir-1.png";
import certificate15 from "../assets/certificate/sertifikat-visualisasi-1.png";
import CV from "../assets/Cvazqi.pdf";
import { FaMedal, FaStar } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const certificateData = [
  {
    src: certificate1,
    title: "Figma For UI / UX Design",
    description: "A certificate for UI design training using Figma.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate2,
    title: "UX Design",
    description: "UX training to improve user experience.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate3,
    title: "Learn to Build a Back-End Application for Beginners",
    description:
      "Certificate of training in building back-end web applications for beginners using JavaScript and Node.js.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate4,
    title: "Learn to Build a Front-End Web for Beginners",
    description:
      "Certificate of training in building front-end web applications for beginners using CSS3 and semantic HTML.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate5,
    title: "Back-End Development with JavaScript Framework",
    description:
      "Certificate from CyberLabs training in building back-end web applications using Express.js and Postman.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate6,
    title:
      "Front-End Development with The Progressive JavaScript Framework Vue.JS",
    description:
      "Certificate from PT Wanteknologi training in building company websites using Vue.js.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate7,
    title: "Learn the Basics of JavaScript Programming",
    description:
      "Basic JavaScript training to improve website interactivity including DOM, events, and debugging.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate8,
    title: "Learn Git Basics with GitHub",
    description:
      "Basic GitHub training to enhance the use of Git and GitHub as tools for collaboration and storing directories publicly.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate9,
    title: "Getting Started with Python Programming",
    description:
      "Basic Python training to improve development and understanding of Python usage.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate10,
    title: "Occupational Health and Safety",
    description: "Occupational Health and Safety training.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate11,
    title: "Global Game Jam",
    description:
      "Game development training with a team collaboration system to be completed in less than 3 days.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate12,
    title: "Unity Essential Pathway",
    description:
      "Training in learning and developing games using Unity, covering systems and usage within the hierarchy.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate13,
    title: "IGDX Seminar: Career Guidance For Aspiring Game Developers",
    description:
      "Seminar to improve understanding of the game developer industry and career in Indonesia.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
        <FaStar />
      </div>
    ),
    type: "intermediate",
  },
  {
    src: certificate14,
    title: "Pursuing a Career as a Software Developer",
    description: "Training on pursuing a career as a software developer.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
  {
    src: certificate15,
    title: "Learn the Basics of Data Visualization",
    description: "Basic training in data visualization.",
    stars: (
      <div className="flex gap-2 text-white items-center">
        <FaStar />
      </div>
    ),
    type: "Beginner",
  },
];

function Certificate() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [loadedImages, setLoadedImages] = useState(
    Array(certificateData.length).fill(false)
  );
  const [lastImageLoaded, setLastImageLoaded] = useState(false);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

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
    <section className="p-0 m-0 bg-slate-950 ">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        active={"Certificate"}
      />

      {/* Konten utama */}
      <div
        className={`transition-all duration-500 ease-in-out h-full p-5 pb-1 ${showIntro ? "h-screen" : ""}  ${
          isExpanded ? "lg:w-7/8" : "w-full lg:pr-[60px]"
        } ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-10"}`}
      >
        {/* Animasi Intro */}
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
              <motion.h3
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`text-6xl font-bold animate-pulse ${
                  theme === "Day" ? "text-slate-950" : "text-white"
                }`}
              >
                Certificate
              </motion.h3>
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
                  Certificate
                </h3>
                <h2
                  className={`text-3xl md:text-5xl font-bold leading-tight ${theme === "Day" ? "text-slate-900" : "text-white"}`}
                >
                  From Learning to Earning -
                  <span className="text-green-500"> My Certificates</span>
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
                    <FaMedal size={24} />
                    Last Certificate
                  </div>
                  <p
                    className={`text-base md:text-lg font-medium ${
                      theme === "Day" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Figma For UI / UX Design
                  </p>
                  <hr className="border-gray-400 w-20" />
                </header>

                <div className="space-y-4 text-justify">
                <div className="relative w-full max-w-md">
  {!lastImageLoaded && (
    <div className="absolute inset-0 h-64 bg-gray-300 animate-pulse rounded-lg flex items-center justify-center text-gray-700 font-medium z-10">
      Memuat gambar...
    </div>
  )}
  <img
    src={certificate1}
    alt="eksis-preview"
    onLoad={() => setLastImageLoaded(true)}
    className={`w-full max-w-md h-64 object-contain rounded-lg shadow-md transition-opacity duration-300 ${
      lastImageLoaded ? "opacity-100" : "opacity-0"
    }`}
  />
</div>


                  <p className={textClass(theme)}>
                    Sertifikat pelatihan desain UI menggunakan Figma.
                  </p>
                  <hr className="border-gray-400 w-20" />

                  <div className="flex justify-between bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4 gap-2">
                    <p className="text-white self-center">Intermidiate</p>
                    <div className="flex gap-2 text-white items-center">
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
            <section className="certificate-All">
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
                    Certificate
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {certificateData.map((item, index) => (
                    <div
                      className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                        theme === "Day"
                          ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                          : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                      }`}
                      key={index}
                    >
                      <div>
                        <div className="flex justify-center py-2 min-h-[200px]">
                        <div className="relative w-full max-w-md">
  {!loadedImages[index] && (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-lg animate-pulse text-gray-700 text-sm font-semibold z-10">
      Memuat gambar...
    </div>
  )}
  <img
    src={item.src}
    alt={item.title}
    onLoad={() => handleImageLoad(index)}
    className={`w-full object-contain rounded-lg shadow-md transition-opacity duration-500 ${
      loadedImages[index] ? "opacity-100" : "opacity-0"
    }`}
  />
</div>

                        </div>

                        <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                          <h5 className="text-xl font-bold">{item.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                        <hr className="my-4 border-gray-400 dark:border-gray-600" />
                      </div>

                      <div className="flex justify-between bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4 gap-2">
                        <p className="text-white self-center">{item.type}</p>
                        {item.stars}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          </main>
        </div>
        <Footer theme={theme} />
      </div>
    </section>
  );
}

export default Certificate;
