import { Project } from "../types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/${project.id}`} className="project-card">
      <Image
        className="max-h-44 h-44 w-full object-cover object-top rounded-md"
        src={project.heroImage}
        alt={project.name}
      />
      <div className="flex flex-col gap-1">
        <h2>{project.name}</h2>
        <p className="line-clamp-2">{project.description}</p>
      </div>
    </Link>
  );
}
