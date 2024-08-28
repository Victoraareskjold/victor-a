import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Project } from "../../types";

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
