import { act, useState } from "react";
import { Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Home,
  User,
  Server,
  Folder,
  MessageCircle,
} from "react-feather";
const Sidebar = ({ theme, setTheme, isExpanded, setIsExpanded, active }) => {
  const navItems = [
    { label: "Home", icon: <Home size={20} />, to: "/" },
    { label: "About", icon: <User size={20} />, to: "/about" },
    { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
    { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
  ];

  return (
    <aside
      className={`hidden lg:flex flex-col justify-between fixed top-0 right-0 h-screen z-20
        border-l transition-[width] duration-500 ease-in-out overflow-visible
        ${isExpanded ? "w-1/8" : "w-[60px]"}
        ${
          theme === "Day"
            ? "bg-slate-100 text-slate-950 border-slate-900"
            : "bg-slate-950 text-white border-slate-900"
        }
      `}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-4 p-2">
        {/* Toggle Sidebar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-md bg-green-500 text-white "
          title={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? "<" : ">"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 p-4 font-semibold uppercase text-sm">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={`group flex items-center gap-3 cursor-pointer tracking-widest relative p-1 ${active == item.label ? "bg-green-600 text-white" : ""} rounded-lg`}
          >
            {/* Icon selalu terlihat */}
            <div className="relative group">
              {item.icon}
              {!isExpanded && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 ml-2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-100">
                  {item.label}
                </div>
              )}
            </div>

            {/* Label muncul jika expanded */}
            <span
              className={`transition-all duration-300 origin-left text-xs ${
                isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            >
              {item.label}
              <div
                className={`absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300 ${active == item.label ? "opacity-0" : ""}`}
              />
            </span>
          </Link>
        ))}
      </nav>

      {/* Bottom Section: Trakteer */}
      <div className="flex flex-col gap-4 p-2">
        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "Day" ? "Night" : "Day")}
          className="p-2 rounded-full text-green-500 transition self-start items-start content-start"
          title="Switch Theme"
        >
          {theme === "Day" ? (
            <div className="flex gap-2 ">
              <Moon size={24} />
              {isExpanded ? <p className={`overflow-hidden transition-all duration-300  ease-in-out ${
                isExpanded ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}>Dark Mode</p> : ""}
            </div>
          ) : (
            <div className="flex gap-2">
              <Sun size={24} />
              {isExpanded ? <p>Light Mode</p> : ""}
            </div>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
