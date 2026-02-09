import React, { useState } from "react";
import { Lock, Play } from "react-feather";
import { FaExchangeAlt } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import { PiDogFill } from "react-icons/pi";
import {
  SiFlutter,
  SiDart,
  SiLaravel,
  SiPhp,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiMysql,
  SiUnity,
  SiSharp,
  SiWebgl,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiShadcnui,
  SiDocker,
  SiRedis,
  SiContactlesspayment,
  SiAxios,
  SiTestcafe,
  SiWebauthn,
  SiGoogleauthenticator,
  SiJsonwebtokens,
  SiEslint,
  SiPrettier,
  SiCss3,
  SiInertia,
  SiPrisma,
  SiReact,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

const PortfolioCard = ({
  theme,
  image,
  title,
  description,
  tools,
  githubLink,
  playLink,
  privateProject,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
        theme === "Day"
          ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
          : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
      }`}
    >
      <div>
        <div className="flex justify-center py-2 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-gray-500 font-semibold">
                Sedang Memuat Gambar...
              </span>
            </div>
          )}
          <img
            src={image}
            alt={title}
            className={`w-full max-w-md object-contain rounded-lg shadow-md transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
            onLoad={handleImageLoad}
          />
        </div>

        <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
          <h5 className="text-xl font-bold">{title}</h5>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        <div className="pb-2 font-medium">Tools Used:</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {tool === "Flutter" && <SiFlutter size={18} />}
              {tool === "React" && <SiReact size={18} />}
              {tool === "Next.js" && <SiNextdotjs size={18} />}
              {tool === "Dart" && <SiDart size={18} />}
              {tool === "Laravel" && <SiLaravel size={18} />}
              {tool === "Inertia" && <SiInertia size={18} />}
              {tool === "PHP" && <SiPhp size={18} />}
              {tool === "HTML5" && <SiHtml5 size={18} />}
              {tool === "JavaScript" && <SiJavascript size={18} />}
              {tool === "Jquery" && <SiJquery size={18} />}
              {tool === "Bootstrap" && <SiBootstrap size={18} />}
              {tool === "MySQL" && <SiMysql size={18} />}
              {tool === "PostgreSQL" && <SiPostgresql size={18} />}
              {tool === "Tailwind" && <SiTailwindcss size={18} />}
              {tool === "CSS3" && <SiCss3 size={18} />}
              {tool === "shadcn/ui" && <SiShadcnui size={18} />}
              {tool === "Docker" && <SiDocker size={18} />}
              {tool === "Redis" && <SiRedis size={18} />}
              {tool === "Midtrans" && <SiContactlesspayment size={18} />}
              {tool === "RajaOngkir" && <GiFullMotorcycleHelmet size={18} />}
              {tool === "Axios" && <SiAxios size={18} />}
              {tool === "PHPUnit" && <SiTestcafe size={18} />}
              {tool === "Laravel Telescope" && <IoTelescope size={18} />}
              {tool === "PKCE" && <FaExchangeAlt size={18} />}
              {tool === "Laravel Passport" && <SiJsonwebtokens size={18} />}
              {tool === "OAuth 2.0" && <SiWebauthn size={18} />}
              {tool === "Socialite" && <SiGoogleauthenticator size={18} />}
              {tool === "Framer Motion" && <TbBrandFramerMotion size={18} />}
              {tool === "ESLint" && <SiEslint size={18} />}
              {tool === "Prettier" && <SiPrettier size={18} />}
              {tool === "Husky" && <PiDogFill size={18} />}
              {tool === "Unity" && <SiUnity size={18} />}
              {tool === "Prisma ORM" && <SiPrisma size={18} />}
              {tool === "REST API" && <TbApi size={18} />}
              {tool === "CSharp" && <SiSharp size={18} />}
              {tool === "WebGL" && <SiWebgl size={18} />}
              <span>{tool}</span>
            </div>
          ))}
        </div>

        <hr className="my-4 border-gray-400 dark:border-gray-600" />
      </div>

      {githubLink && (
        <a
          href={githubLink}
          className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4"
        >
          <SiGithub size={24} color="white" className="mr-2 self-center" />
          <p className="text-white self-center">See Github</p>
        </a>
      )}

      {playLink && (
        <a
        href={playLink}
        className="flex justify-center bg-blue-700 hover:bg-blue-600 p-3 rounded-lg mt-4"
      >
        <Play size={24} color="white" className="mr-2 self-center" />
        <p className="text-white self-center">Play Game</p>
      </a>

      )}

      {privateProject && (
        <div className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4">
          <Lock size={24} color="white" className="mr-2 self-center" />
          <p className="text-white self-center">Private Project</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
