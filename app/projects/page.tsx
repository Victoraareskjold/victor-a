"use client";

import ProjectsView from "@/components/Projects/ProjectsView";
import { Project } from "@/types";
import { getProjects } from "@/utils/firebaseFunctions";
import { Grid, List } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Projects() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();

      setProjects(projects);
      setLoadingProjects(false);
    };

    fetchData();
  }, []);
  return (
    <main className="gap-6">
      <p className="dark:text-white">
        Here&apos;s a mix of passion projects, hobbies, and work I&apos;ve done
        for friends and clients.
      </p>

      <button
        onClick={() => setIsGrid(!isGrid)}
        className="flex flex-row gap-1 text-[var(--color-lightPrimary)] items-center dark:text-white"
      >
        <div className="p-2 bg-[var(--color-secondary)] dark:bg-[var(--color-lightPrimary)]">
          {isGrid ? <List size={20} /> : <Grid size={20} />}
        </div>
        <p className="text-sm dark:text-white">
          Toggle {isGrid ? "List" : "Grid"}
        </p>
      </button>

      <ProjectsView
        projects={projects}
        loadingProjects={loadingProjects}
        viewMode={isGrid ? "grid" : "list"}
      />
    </main>
  );
}
