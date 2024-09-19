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

      {project.heroImage && !project.preview ? (
        <img src={project.heroImage} alt={project.name} />
      ) : null}

      {project.date ? (
        <p className="dark:text-[var(--color-lightWhite)]">{project.date}</p>
      ) : null}

      {project.preview ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: project.preview }}></div>
          <p className="mt-4 text-center">
            &#8593; Try it out yourself &#8593;
          </p>
        </div>
      ) : null}

      {project.description ? (
        <div
          className="dark:text-white"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      ) : null}
    </main>
  );
}
