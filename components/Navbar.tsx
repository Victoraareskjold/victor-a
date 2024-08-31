"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-between py-4 text-white">
      <Link href="/" className="text-[var(--color-primary)] font-medium">
        <Image alt="logo" height="20" width="20" src="logo.svg" />
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "hover:text-[var(--color-primary)] font-medium"
              : "text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)]"
          }
        >
          Om meg
        </Link>
        <Link
          href="/blog"
          className={
            pathname === "/blog"
              ? "hover:text-[var(--color-primary)] font-medium"
              : "text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)]"
          }
        >
          Blogg
        </Link>
      </div>
      <button className="w-5 h-5">
        <Image height="20" width="20" src="moon.svg" />
      </button>
    </nav>
  );
}
