"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sunSrc = currentTheme === "light" ? "/sunDark.svg" : "/sunLight.svg";
  const moonSrc = currentTheme === "light" ? "/moonDark.svg" : "/moonLight.svg";

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        type="button"
        className={`relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${
          currentTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
        }`}
      >
        <div
          className={`absolute inset-y-1  w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 ease-in-out ${
            currentTheme === "dark"
              ? "translate-x-8 bg-slate-500"
              : "translate-x-0 bg-white"
          }`}
        />
        <div className="absolute inset-y-0 left-2 flex items-center justify-center">
          <Image alt="Link" src={sunSrc} width="16" height="16" />
        </div>
        <div className="absolute inset-y-0 right-2 flex items-center justify-center">
          <Image alt="Link" src={moonSrc} width="16" height="16" />
        </div>
      </button>
    </div>
  );
}
