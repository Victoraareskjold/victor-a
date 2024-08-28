"use client";

import { useEffect, useState } from "react";
import { getProjects } from "./utils/firebaseFunctions";
import { Project } from "../types";

import ProjectCard from "../components/ProjectCard";
/* import ProjectExperiences from "../components/ProjectExperiences"; */

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <main>
      <section>
        <div>
          <h1 className="headerText mb-2">
            Webutvikler,
            <br />
            <span>
              <h1 className="headerTextBold">Victor Aareskjold</h1>
            </span>
          </h1>
          <p className="mb-8">Jeg kunne hvertfall ønske at jeg var det..</p>
        </div>
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
          <p>Min CV</p>
        </a>
      </section>

      <section className="flex flex-col w-full align-center gap-4">
        <h3>Mine Prosjekter</h3>
        <div className="flex flex-row flex-wrap gap-8 align-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h3>Min erfaring</h3>
        {/* <div>
          {projects.map((project) => (
            <ProjectExperiences key={project.id} project={project} />
          ))}
        </div> */}
      </section>
    </main>
  );
}
