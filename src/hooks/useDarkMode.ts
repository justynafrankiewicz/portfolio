import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return { isDark, toggleDarkMode };
};
