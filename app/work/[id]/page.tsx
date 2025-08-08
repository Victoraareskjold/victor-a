"use client";
import { track } from "@vercel/analytics";
import { getProjects } from "../../../utils/firebaseFunctions";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";

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
      </div>

      {project?.heroImage && !project?.preview ? (
        <img src={project?.heroImage} alt={project?.name} />
      ) : null}

      {project?.date ? (
        <p className="dark:text-[var(--color-lightWhite)]">{project?.date}</p>
      ) : null}

      {project?.link ? (
        <a
          className="hover:opacity-50 duration-500 dark:bg-white px-4 py-3 w-fit rounded-md flex items-center gap-2 bg-[var(--color-primary)]"
          href={"https://" + project?.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track(`Project_${project}_Click`)}
        >
          <Play
            strokeWidth={1.5}
            size={20}
            className="dark:stroke-[var(--color-primary)] stroke-white"
          />
          <p
            className="dark:text-[var(--color-primary)] text-white"
            style={{ fontWeight: 500 }}
          >
            Live Demo
          </p>
        </a>
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
