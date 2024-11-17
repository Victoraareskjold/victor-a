import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Project, Certificate } from "../../types";

export async function getProjects(projectId?: string): Promise<Project[]> {
  const projectsCollection = collection(db, "work");

  let q;
  if (projectId) {
    q = query(projectsCollection, where("id", "==", projectId));
  } else {
    q = query(projectsCollection, orderBy("priority", "desc"));
  }

  const projectsSnapshot = await getDocs(q);

  const projectsList = projectsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name || null,
      description: data.description || null,
      categories: data.categories || [],
      date: data.date || null,
      heroImage: data.heroImage || null,
      link: data.link || null,
      priority: data.priority || null,
      preview: data.preview || null,
    } as Project;
  });

  return projectsList;
}

export async function getCertificates(
  certificateId?: string
): Promise<Certificate[]> {
  const certificateCollection = collection(db, "certificates");

  let q;
  if (certificateId) {
    q = query(certificateCollection, where("id", "==", certificateId));
  } else {
    q = query(certificateCollection);
  }

  const certificateSnapshot = await getDocs(q);

  const certificateList = certificateSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      course: data.course || "",
      link: data.link || "",
    } as Certificate;
  });

  return certificateList;
}
