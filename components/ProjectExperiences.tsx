import { Experience } from "../types";
import Link from "next/link";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link
      href={`/experience/${experience.id}`}
      className="project-card hover:opacity-50"
    >
      <div className="flex flex-col gap-1">
        <h2
          className="font-medium dark:text-white"
          dangerouslySetInnerHTML={{ __html: experience.title }}
        ></h2>
        <p className="line-clamp-2 dark:text-[var(--color-lightWhite)]">
          {experience.description}
        </p>
      </div>
    </Link>
  );
}
