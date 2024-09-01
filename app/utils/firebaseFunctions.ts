import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Project, Experience } from "../../types";

export async function getProjects(projectId?: string): Promise<Project[]> {
  const projectsCollection = collection(db, "work");

  let q;
  if (projectId) {
    q = query(projectsCollection, where("id", "==", projectId));
  } else {
    q = query(projectsCollection);
  }

  const projectsSnapshot = await getDocs(q);

  const projectsList = projectsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name || "",
      description: data.description || "",
      categories: data.categories || [],
      date: data.date || "",
      heroImage: data.heroImage || "",
      pdf: data.pdf || "",
    } as Project;
  });

  return projectsList;
}

export async function getExperience(
  experienceId?: string
): Promise<Experience[]> {
  const experienceCollection = collection(db, "experience");

  let q;
  if (experienceId) {
    q = query(experienceCollection, where("id", "==", experienceId));
  } else {
    q = query(experienceCollection);
  }

  const experienceSnapshot = await getDocs(q);

  const experienceList = experienceSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      description: data.description || "",
    } as Experience;
  });

  return experienceList;
}
