import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiGo,
  SiPostgresql,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiUnity,
} from "react-icons/si";

// Main Component
const InfiniteScrollLanguages = () => {
  // Memoizing the languages array inside the component
  const languages = useMemo(
    () => [
      { name: "JavaScript", icon: <SiJavascript size={40} /> },
      { name: "Python", icon: <SiPython size={40} /> },
      { name: "PHP", icon: <SiPhp size={40} /> },
      { name: "React", icon: <SiReact size={40} /> },
      { name: "Tailwindcss", icon: <SiTailwindcss size={40} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
      { name: "Unity", icon: <SiUnity size={40} /> },
      { name: "Html5", icon: <SiHtml5 size={40} /> },
      { name: "Css3", icon: <SiCss3 size={40} /> },
      { name: "Laravel", icon: <SiLaravel size={40} /> },
      { name: "Postgresql", icon: <SiPostgresql size={40} /> },
      { name: "Nodedotjs", icon: <SiNodedotjs size={40} /> },
    ],
    []
  );

  const controls = useAnimation();
  const isComponentVisible = useRef(true);

  useEffect(() => {
    const animate = async () => {
      while (isComponentVisible.current) {
        await controls.start({
          x: "-100%", 
          transition: {
            duration: 30, 
            ease: "linear",
          },
        });
        controls.set({ x: 0 }); 
      }
    };

    if (isComponentVisible.current) {
      animate();
    }

    return () => {
      isComponentVisible.current = false;
    };
  }, [controls]);

  return (
    <div className="overflow-hidden w-full bg-transparent py-4">
      <motion.div
        className="flex gap-8 w-max"
        animate={controls}
        style={{ display: "flex" }}
      >
        {languages.map((lang, i) => (
          <div key={i} className="flex flex-col items-center min-w-[120px]">
            <div className="text-4xl text-gray-800">{lang.icon}</div>
            <p className="text-sm mt-2">{lang.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollLanguages;
