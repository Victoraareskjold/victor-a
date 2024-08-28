"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Project } from "../../types";
import { getProjects } from "../utils/firebaseFunctions";

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        const data = await getProjects(id as string);
        setProject(data);
      };

      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <p>Laster...</p>;
  }

  return (
    <main>
      <h1>{project.name}</h1>
      <img src={project.heroImage} alt={project.name} />
      <p>{project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.description }} />
      <a href={project.pdf} target="_blank" rel="noopener noreferrer">
        Last ned PDF
      </a>
    </main>
  );
}
