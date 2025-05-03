import React, { createContext, useContext, useState } from "react";

// Membuat Context untuk tema
const ThemeContext = createContext();

// Hook untuk menggunakan ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Provider untuk ThemeContext
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Day"); // Default tema adalah Day

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Day" ? "Night" : "Day"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
