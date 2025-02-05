"use client";

import { useEffect, useState } from "react";
import { getCertificates, getProjects } from "../utils/firebaseFunctions";
import { Certificate, Project } from "../types";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ProjectCertificates from "../components/ProjectCertificates";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import AvailabilityComponent from "../components/AvailabilityComponent";
import { track } from "@vercel/analytics";
import { useTheme } from "next-themes";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingCertificates, setLoadingCertificates] = useState(true);

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [githubSvgSrc, setGithubSvgSrc] = useState("./githubLight.svg");
  const [linkSvgSrc, setLinkSvgSrc] = useState("./linkDark.svg");

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoadingProjects(false);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchCertificates = async () => {
      const data = await getCertificates();
      setCertificates(data);
      setLoadingCertificates(false);
    };

    fetchCertificates();
  }, []);

  useEffect(() => {
    const githubSvgSrc = async () => {
      const src =
        currentTheme === "light" ? "./github.svg" : "./githubDark.svg";
      setGithubSvgSrc(src);
    };

    const linkSvgSrc = () => {
      const src =
        currentTheme === "light" ? "./linkDark.svg" : "./linkLight.svg";
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
            Web Developer,
            <br />
            <span>
              <h1 className="headerTextBold dark:text-white">
                Victor Aareskjold
              </h1>
            </span>
          </h1>
          <p className="mb-8 max-w-lg dark:text-[var(--color-lightWhite)]">
            I&apos;m a 22-year-old aspiring Frontend-developer passionate about
            coding and gaining hands-on experience. Explore my projects to see
            what I&apos;ve been working on!
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
            <Image alt="Link" src={githubSvgSrc} width="16" height="16" />
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

      <section className="flex flex-col w-full align-center gap-4">
        <h3 className="dark:text-[var(--color-lightWhite)]">Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 flex-wrap gap-8 align-center">
          {loadingProjects
            ? Array(3)
                .fill(0)
                .map((_, index) => <LoadingPlaceholder key={index} />)
            : projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>
      </section>

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
                />
              ))}
        </div>
      </section>
    </main>
  );
}
