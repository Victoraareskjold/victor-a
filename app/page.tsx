"use client";

import { useEffect, useState } from "react";
import { getCertificates, getProjects } from "../utils/firebaseFunctions";
import { Certificate, Project } from "../types";
import Image from "next/image";
import ProjectCertificates from "../components/ProjectCertificates";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import { track } from "@vercel/analytics";
import { useTheme } from "next-themes";
import ProjectsView from "@/components/Projects/ProjectsView";
import Link from "next/link";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingCertificates, setLoadingCertificates] = useState(true);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [githubSvgSrc, setGithubSvgSrc] = useState("/githubLight.svg");
  const [linkSvgSrc, setLinkSvgSrc] = useState("/linkDark.svg");

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      const certificates = await getCertificates();

      setProjects(projects);
      setLoadingProjects(false);

      setCertificates(certificates);
      setLoadingCertificates(false);
    };

    fetchData();
  }, []);

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
    <main>
      <section>
        <div>
          <h1 className="headerText mb-2 dark:text-white">
            <span>
              <h1 className="headerTextBold dark:text-white">
                Victor Aareskjold
              </h1>
            </span>
          </h1>
          <p className="mb-8 max-w-lg dark:text-[var(--color-lightWhite)]">
            I&apos;m a 23-year-old aspiring developer passionate about coding
            and gaining hands-on experience. Explore my projects to see what
            I&apos;ve been working on!
          </p>
        </div>

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
      </section>

      <div>
        <h3 className="dark:text-[var(--color-lightWhite)] mb-4">Projects</h3>
        <ProjectsView
          viewMode={"list"}
          projects={projects.slice(0, 3)}
          loadingProjects={loadingProjects}
        />

        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="px-3 py-1 text-sm bg-[var(--color-primary)] text-white dark:bg-[var(--color-lightPrimary)] rounded-full"
          >
            See more projects
          </Link>
        </div>
      </div>

      <section
        id="certificates"
        className="flex flex-col w-full align-center gap-4"
      >
        <h3 className="dark:text-[var(--color-lightWhite)]">Certificates</h3>
        <div className="flex flex-col gap-8">
          {loadingCertificates
            ? Array(1)
                .fill(0)
                .map((_, index) => <LoadingPlaceholder key={index} />)
            : certificates.map((certificate) => (
                <ProjectCertificates
                  key={certificate.id}
                  certificate={certificate}
                  linkSvgSrc={linkSvgSrc}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
