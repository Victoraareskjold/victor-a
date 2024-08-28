import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Project } from "../../types";

export async function getProjects(): Promise<Project[]> {
  const projectsCollection = collection(db, "work");
  const projectsSnapshot = await getDocs(projectsCollection);

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
