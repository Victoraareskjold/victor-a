"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return null;
  }

  const logoSrc = currentTheme === "dark" ? "/logoDark.svg" : "/logoLight.svg";

  return (
    <nav className="flex w-full justify-between py-4 text-white items-center">
      <Link
        href="/"
        className="text-[var(--color-primary)] font-medium p-2 rounded-full"
      >
        <Image alt="logo" height="20" width="20" src={logoSrc} />
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "py-1 px-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] font-medium dark:text-white"
              : "py-1 px-2 text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)] dark:text-[var(--color-lightWhite)] dark:hover:text-white"
          }
        >
          About me
        </Link>
        <Link
          href="/blog"
          className={
            pathname === "/blog"
              ? "py-1 px-2 text-[var(--color-primary)] hover:text-[var(--color-primary)] font-medium dark:text-white"
              : "py-1 px-2 text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)] dark:text-[var(--color-lightWhite)] dark:hover:text-white"
          }
        >
          Blog
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
