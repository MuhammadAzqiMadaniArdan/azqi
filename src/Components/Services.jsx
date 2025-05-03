// components/Services.jsx

import { motion } from "framer-motion";
import { Monitor, GiGameConsole, Mail, Database } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = ({ theme }) => {
  return (
    <section className="services">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-3xl md:text-4xl font-medium ${theme === "Day" ? "text-gray-600" : "text-white"}`}>
            Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Web Development"
            description="I build responsive and scalable websites and web applications using modern technologies like Laravel for backend and React with Tailwind CSS for frontend. My focus is on clean architecture, usability, and performance."
            tools={[
              { icon: SiLaravel, name: "Laravel" },
              { icon: SiReact, name: "React" },
              { icon: SiTailwindcss, name: "Tailwind" },
              { icon: SiMysql, name: "Mysql" },
              { icon: SiHtml5, name: "Html5" },
              { icon: SiCss3, name: "CSS3" },
              { icon: SiJavascript, name: "JavaScript" },
              { icon: SiPostgresql, name: "PostgreSQL" },
            ]}
            icon={<Monitor className="w-24 h-24 object-contain sm:w-20 sm:h-20" />}
            theme={theme}
          />

          <ServiceCard
            title="Game Development"
            description="I build responsive and scalable websites and web applications using modern technologies like Laravel for backend and React with Tailwind CSS for frontend. My focus is on clean architecture, usability, and performance."
            tools={[
              { icon: SiUnity, name: "Unity" },
              { icon: SiSharp, name: "C#" },
              { icon: SiHtml5, name: "Html5" },
              { icon: SiJavascript, name: "JavaScript" },
            ]}
            icon={<GiGameConsole className="w-24 h-24 object-contain sm:w-20 sm:h-20" />}
            theme={theme}
          />

          <ServiceCard
            title="Email Automation & Integration"
            description="I implement automated email systems for scheduled and condition-based notifications. Using Laravel, I integrate smart email workflows that improve communication and keep users engaged."
            tools={[
              { icon: SiLaravel, name: "Laravel" },
              { icon: SiReact, name: "React" },
              { icon: SiJavascript, name: "JavaScript" },
              { icon: Mail, name: "Email" },
            ]}
            icon={<Mail className="w-24 h-24 object-contain sm:w-20 sm:h-20" />}
            theme={theme}
          />

          <ServiceCard
            title="Database Development & Management"
            description="I design, manage, and optimize databases for both web and mobile applications. With experience in MySQL and PostgreSQL, I ensure efficient data handling, security, and smooth migrations when needed."
            tools={[
              { icon: SiPostgresql, name: "PostgreSQL" },
              { icon: SiMysql, name: "MySQL" },
            ]}
            icon={<Database className="w-24 h-24 object-contain sm:w-20 sm:h-20" />}
            theme={theme}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
