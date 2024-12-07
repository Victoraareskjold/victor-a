export interface Project {
  id: string;
  name: string;
  description: string;
  categories: string[];
  date: string;
  heroImage: string;
  link: string;
  priority: number;
  preview: any;
}

export interface Certificate {
  id: string;
  title: string;
  course: string;
  link: string;
}

export interface Blogs {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  description: string;
  commits: any;
  lastCommit?: {
    title: string;
    createdAt: string;
  } | null; // Tillat null-verdi
}
