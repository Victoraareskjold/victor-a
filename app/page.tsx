"use client";

import { useEffect, useState } from "react";
import { getExperience, getProjects } from "./utils/firebaseFunctions";
import { Experience, Project } from "../types";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ProjectExperiences from "../components/ProjectExperiences";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import AvailabilityComponent from "@/components/AvailabilityComponent";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoadingProjects(false);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getExperience();
      setExperiences(data);
      setLoadingExperiences(false);
    };

    fetchExperiences();
  }, []);

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
            I&apos;m a 22-year-old aspiring data engineer passionate about
            coding and gaining hands-on experience. Explore my projects to see
            what I&apos;ve been working on!
          </p>
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <a
            className="w-fit block bg-[var(--color-primary)] py-1 px-3 rounded-full flex flex-row gap-2 items-center"
            href="https://github.com/Victoraareskjold"
            target="_blank"
          >
            <p className="btn">Victoraareskjold</p>
            <Image alt="Link" src="github.svg" width="16" height="16" />
          </a>
          <a
            className="w-fit block bg-[var(--color-grey)] py-1 px-3 rounded-full flex flex-row gap-2 items-center"
            href="resume.pdf"
            target="_blank"
          >
            <p className="btnSecondary">My Resume</p>
            <Image alt="Link" src="link.svg" width="10" height="10" />
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

      <section className="flex flex-col w-full align-center gap-4">
        <h3 className="dark:text-[var(--color-lightWhite)]">Experiences</h3>
        <div className="flex flex-col gap-8">
          {loadingExperiences
            ? Array(1)
                .fill(0)
                .map((_, index) => <LoadingPlaceholder key={index} />)
            : experiences.map((experience) => (
                <ProjectExperiences
                  key={experience.id}
                  experience={experience}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
