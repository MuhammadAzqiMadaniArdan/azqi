import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer className="flex justify-end min-w-full w-1/2 h-[15%] pt-10 ml-5">
      <p
        className={`uppercase py-2 px-5 mb-10 bg-green-500 rounded-l-full font-semibold self-center ${
          theme === "Day" ? "text-white" : "text-gray-900"
        }`}
      >
        copyright © 2025 Muhammad Azqi Madani Ardan
      </p>
    </footer>
  );
};

export default Footer;
