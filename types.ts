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
