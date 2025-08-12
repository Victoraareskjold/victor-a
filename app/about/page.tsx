"use client";

import { track } from "@vercel/analytics";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [githubSvgSrc, setGithubSvgSrc] = useState("/githubLight.svg");
  const [linkSvgSrc, setLinkSvgSrc] = useState("/linkDark.svg");

  useEffect(() => {
    const githubSvgSrc = async () => {
      const src = currentTheme === "light" ? "/github.svg" : "/githubDark.svg";
      setGithubSvgSrc(src);
    };

    const linkSvgSrc = () => {
      const src = currentTheme === "light" ? "/darkLink.svg" : "/lightLink.svg";
      setLinkSvgSrc(src);
    };

    githubSvgSrc();
    linkSvgSrc();
  }, [currentTheme]);

  return (
    <main className="gap-6 flex flex-row">
      <img
        src="/profileimg.jpeg"
        alt="Profile Picture"
        className="w-48 h-48 ml-2 rounded-full"
      />
      <div className="flex flex-col gap-6">
        <p className="dark:text-[var(--color-lightWhite)]">
          I have always had a strong interest in technology, which has driven me
          to explore and experiment with various projects over the past years.
          During this time, I have honed my problem-solving skills by helping
          friends and family with diverse tech solutions, from troubleshooting
          software to creating small, tailored applications.
          <br />
          <br />I am passionate about continuous learning and enjoy tackling
          challenges that push me to grow both technically and personally.
          Whether it&apos;s exploring new technologies, collaborating with
          others, or solving complex problems, I am always eager to take on the
          next opportunity.
        </p>
        <div className="flex flex-row gap-4 flex-wrap">
          <a
            className="w-fit block bg-[var(--color-primary)] dark:bg-[var(--color-grey)] py-1 px-3 rounded-full flex flex-row gap-2 items-center duration-500"
            href="https://github.com/Victoraareskjold"
            onClick={() => track("Github_Click")}
            target="_blank"
          >
            <p className="btn dark:text-[var(--color-primary)]">
              Victoraareskjold
            </p>
            <Image alt="Github" src={githubSvgSrc} width="16" height="16" />
          </a>
          <a
            className="w-fit block bg-[var(--color-grey)] dark:bg-transparent py-1 px-3 rounded-full flex flex-row gap-2 items-center duration-500"
            href="resume.pdf"
            target="_blank"
            onClick={() => track("Resume_Click")}
          >
            <p className="btnSecondary dark:text-[var(--color-light)]">
              My Resume
            </p>
            <Image alt="Link" src={linkSvgSrc} width="10" height="10" />
          </a>
          {/* <AvailabilityComponent /> */}
        </div>
      </div>
    </main>
  );
}
