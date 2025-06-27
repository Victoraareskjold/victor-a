"use client";
import { track } from "@vercel/analytics";
import { getProjects } from "../../../utils/firebaseFunctions";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const [loading, setLoading] = useState(false);
  const { id } = params;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        const projects = await getProjects();
        const project = projects.find((project) => project.id === id) || null;

        setProject(project);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <h1>{project?.name}</h1>
        {project?.link ? (
          <a
            className="dark:text-white hover:opacity-50 duration-500"
            style={{ textDecoration: "underline", fontWeight: 500 }}
            href={"https://" + project?.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(`Project_${project}_Click`)}
          >
            Visit {project?.name}
          </a>
        ) : null}
      </div>

      {project?.heroImage && !project?.preview ? (
        <img src={project?.heroImage} alt={project?.name} />
      ) : null}

      {project?.date ? (
        <p className="dark:text-[var(--color-lightWhite)]">{project?.date}</p>
      ) : null}

      {project?.preview ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: project?.preview }}></div>
          <p className="mt-4 dark:text-[var(--color-lightWhite)] text-center">
            &#8593; Try it out yourself &#8593;
          </p>
        </div>
      ) : null}

      {project?.description ? (
        <div
          className="dark:text-white"
          dangerouslySetInnerHTML={{ __html: project?.description }}
        />
      ) : null}
    </main>
  );
}
