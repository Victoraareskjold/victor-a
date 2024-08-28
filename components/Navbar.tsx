"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full justify-between py-4 text-white">
      <Link href="/" className={"text-[var(--color-primary)]"}>
        Logo
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "hover:text-[var(--color-primary)]"
              : "text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)]"
          }
        >
          Om Meg
        </Link>
        <Link
          href="/blog"
          className={
            pathname === "/blog"
              ? "hover:text-[var(--color-primary)]"
              : "text-[var(--color-lightPrimary)] hover:text-[var(--color-primary)]"
          }
        >
          Blogg
        </Link>
      </div>
      <button>Utseende knapp</button>
    </nav>
  );
}
