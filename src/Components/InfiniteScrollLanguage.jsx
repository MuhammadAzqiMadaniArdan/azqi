import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
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
  const languages = useMemo(() => [
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
  ], []); // Memoizing so that it doesn't get recalculated unnecessarily

  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: "-100%", // Move all items out of the viewport
          transition: {
            duration: 30, // Adjust duration for smoother but slower movement
            ease: "linear",
          },
        });
        controls.set({ x: 0 }); // Reset position to 0 when reaching end
      }
    };
    animate();
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
