import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Project, Certificate, Blogs } from "../../types";

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

export async function getBlogs(): Promise<Blogs[]> {
  const blogCollection = collection(db, "blog");
  const blogSnapshot = await getDocs(blogCollection);

  const blogList = await Promise.all(
    blogSnapshot.docs.map(async (doc) => {
      const data = doc.data();

      const postsRef = collection(db, "blog", doc.id, "commits");
      const lastCommitQuery = query(
        postsRef,
        orderBy("createdAt", "desc"),
        limit(1)
      );
      const lastCommitSnap = await getDocs(lastCommitQuery);

      let lastCommit = null;
      if (!lastCommitSnap.empty) {
        const commitDoc = lastCommitSnap.docs[0];

        const commitData = lastCommitSnap.docs[0].data();
        lastCommit = {
          title: commitDoc.id || "",
          createdAt: commitData.createdAt?.toDate().toISOString() || "",
        };
      }

      return {
        id: doc.id,
        title: data.title || "No title.",
        author: data.author || "No author.",
        description: data.description || "No description.",
        createdAt: data.createdAt?.toDate().toISOString() || "No date.",
        lastCommit,
      } as Blogs;
    })
  );

  return blogList;
}

export async function getAllCommits(blogId: string) {
  const postsRef = collection(db, "blog", blogId, "commits");
  const postsQuery = query(postsRef, orderBy("createdAt", "desc"));
  const postsSnapshot = await getDocs(postsQuery);

  const commits = postsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: doc.id || "No title.",
      createdAt: data.createdAt?.toDate().toISOString() || "No date.",
      description: data.description || "No description.",
    };
  });

  console.log(commits);

  return commits;
}
