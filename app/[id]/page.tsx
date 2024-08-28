import { getProjects } from "../utils/firebaseFunctions";
import { Project } from "../../types";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = params;

  // Hent alle prosjekter og filtrer basert på ID
  const projects = await getProjects();
  const project = projects.find((project) => project.id === id) || null;

  if (!project) {
    // Returner en 404-side hvis prosjektet ikke finnes
    notFound();
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
