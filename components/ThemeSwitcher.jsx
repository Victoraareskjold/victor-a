"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        type="button"
        className={`relative w-16 h-8 bg-gray-100 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${
          currentTheme === "dark" ? "bg-gray-100" : "bg-gray-300"
        }`}
      >
        {/* Sirkelen som beveger seg */}
        <div
          className={`absolute inset-y-1  w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            currentTheme === "dark" ? "translate-x-8" : "translate-x-0"
          }`}
        />
        {/* Ikonene for sol og måne */}
        <div className="absolute inset-y-0 left-2 flex items-center justify-center">
          <Image alt="Link" src="sun.svg" width="16" height="16" />
        </div>
        <div className="absolute inset-y-0 right-2 flex items-center justify-center">
          <Image alt="Link" src="moon.svg" width="16" height="16" />
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
