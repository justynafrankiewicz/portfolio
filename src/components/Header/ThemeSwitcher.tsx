import { Moon, Sun } from "lucide-react";

import { useDarkMode } from "../../hooks/useDarkMode";

export const ThemeSwitcher = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="
        flex items-center space-x-1
        text-gray-800 dark:text-gray-200
        hover:text-primary dark:hover:text-primary
        text-sm md:text-base
        px-2 py-1
        transition
        rounded
      "
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
