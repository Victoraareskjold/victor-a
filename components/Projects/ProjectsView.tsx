import { Project } from "@/types";
import LoadingPlaceholder from "../LoadingPlaceholder";
import ProjectCard from "../ProjectCard";

type ProjectsViewProps = {
  projects: Project[];
  loadingProjects: boolean;
  viewMode: "grid" | "list";
};

export default function ProjectsView({
  projects,
  loadingProjects,
  viewMode,
}: ProjectsViewProps) {
  const layoutClasses =
    viewMode === "grid"
      ? "grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      : "flex flex-col gap-8";

  return (
    <section className="w-full">
      <div className={layoutClasses}>
        {loadingProjects
          ? Array.from({ length: 3 }, (_, i) => <LoadingPlaceholder key={i} />)
          : projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
              />
            ))}
      </div>
    </section>
  );
}
