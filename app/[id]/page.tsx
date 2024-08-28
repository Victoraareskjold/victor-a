import { getProjects } from "../utils/firebaseFunctions";
import { Project } from "../../types";

// Denne funksjonen henter prosjektdata basert på ID
export async function getProjectData(id: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.id === id) || null;
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProjectData(params.id);

  if (!project) {
    return <p>Prosjektet ble ikke funnet.</p>;
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
