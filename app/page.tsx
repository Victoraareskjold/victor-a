"use client";

import { useEffect, useState } from "react";
import { getExperience, getProjects } from "./utils/firebaseFunctions";
import { Experience, Project } from "../types";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import ProjectExperiences from "../components/ProjectExperiences";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

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
          <h1 className="headerText mb-2">
            Web Developer,
            <br />
            <span>
              <h1 className="headerTextBold">Victor Aareskjold</h1>
            </span>
          </h1>
          <p className="mb-8">WTS.</p>
        </div>
        <a
          className="w-fit block bg-[var(--color-grey)] py-1 px-3 rounded-full flex flex-row gap-2"
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="btn">My Resume</p>
          <Image alt="Link" src="link.svg" width="10" height="10" />
        </a>
      </section>

      <section className="flex flex-col w-full align-center gap-4">
        <h3>Projects</h3>
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
        <h3>Experiences</h3>
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
