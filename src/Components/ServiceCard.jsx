// components/ServiceCard.jsx

import { SiLaravel, SiReact, SiTailwindcss, SiMysql, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiUnity, SiSharp } from "react-icons/si";
import { GiGameConsole } from "react-icons/gi";
import { Mail, Database, Monitor } from "react-icons/fa"; // Ganti dengan icon sesuai kebutuhan

const ServiceCard = ({ title, description, tools, icon, theme }) => {
  return (
    <div
      className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
        theme === "Day"
          ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
          : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
      }`}
    >
      <div className="flex justify-center">
        {icon}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-2">
        <div className="text-center sm:text-left">
          <h5 className="text-xl font-bold mb-1">{title}</h5>
          <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
        </div>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-600" />

      <div className="pb-2">
        <p>Tools : </p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-500 dark:text-gray-400">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center gap-2">
            <tool.icon size={18} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
