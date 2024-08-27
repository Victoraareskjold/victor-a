"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-between py-4 text-white">
      <Link
        href="/"
        className={
          pathname === "/" ? "text-yellow-300" : "hover:text-yellow-300"
        }
      >
        Logo
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/about"
          className={
            pathname === "/about" ? "text-yellow-300" : "hover:text-yellow-300"
          }
        >
          Om Meg
        </Link>
        <Link
          href="/blog"
          className={
            pathname === "/blog" ? "text-yellow-300" : "hover:text-yellow-300"
          }
        >
          Blogg
        </Link>
      </div>
      <button>Utseende knapp</button>
    </nav>
  );
}
