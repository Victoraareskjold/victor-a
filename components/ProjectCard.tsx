import Image from "next/image";
import { Project } from "../types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  viewMode: "grid" | "list";
}

export default function ProjectCard({ project, viewMode }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`project-card hover:opacity-50 duration-500 w-full flex ${
        viewMode === "grid" ? "flex-col gap-2" : "flex-row gap-6"
      }`}
    >
      <div
        className={`h-48 w-full relative ${
          viewMode === "grid" ? "aspect-square w-full" : " w-3/5"
        }`}
      >
        <Image
          className="object-cover object-top rounded-md"
          src={project.heroImage}
          alt={project.name}
          fill
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="dark:text-white ">{project.name}</h2>
        <div className="h-full flex flex-col justify-between">
          <p
            className={`dark:text-[var(--color-lightWhite)] ${
              viewMode === "grid" ? "line-clamp-3" : "line-clamp-4"
            }`}
          >
            {project.description}
          </p>
          <button className="self-start underline">
            <p className="text-sm dark:text-white">Read more</p>
          </button>
        </div>
      </div>
    </Link>
  );
}
