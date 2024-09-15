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
      <div>
        <h1>{project.name}</h1>
        {project.link ? (
          <a
            className="dark:text-white"
            style={{ textDecoration: "underline", fontWeight: 500 }}
            href={"https://" + project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {project.name}
          </a>
        ) : null}
      </div>

      <img src={project.heroImage} alt={project.name} />
      <p className="dark:text-[var(--color-lightWhite)]">{project.date}</p>
      <div
        className="dark:text-white"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
    </main>
  );
}
