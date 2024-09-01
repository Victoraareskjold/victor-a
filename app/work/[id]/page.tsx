import { getProjects } from "../../utils/firebaseFunctions";
import { Project } from "../../../types";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = params;

  const projects = await getProjects();
  const project = projects.find((project) => project.id === id) || null;

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.name}</h1>
      <img src={project.heroImage} alt={project.name} />
      <p>{project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.description }} />
    </main>
  );
}
