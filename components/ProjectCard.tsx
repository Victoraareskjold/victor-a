import { Project } from "../types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="project-card hover:opacity-50 duration-500"
    >
      <img
        className="max-h-44 w-full h-full object-cover object-top rounded-md"
        src={project.heroImage}
        alt={project.name}
      />
      <div className="flex flex-col gap-1">
        <h2 className="dark:text-white ">{project.name}</h2>
        <p className="line-clamp-2 dark:text-[var(--color-lightWhite)]">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
