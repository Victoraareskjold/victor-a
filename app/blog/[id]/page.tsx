import { getBlogs, getAllCommits } from "../../utils/firebaseFunctions";
import { Blogs } from "../../../types";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default async function blogPage({ params }: Props) {
  const { id } = params;

  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.id === id) || null;

  if (!blog) {
    notFound();
  }

  const commits = await getAllCommits(id);

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: blog.title }} />
      <section>
        <h3 className="dark:text-[var(--color-lightWhite)] mb-2">
          All commits:
        </h3>
        <ul className="flex gap-4 flex-col">
          {commits.map((commit) => (
            <li key={commit.id}>
              <h2 className="dark:text-white">{commit.title}</h2>
              <p className="dark:text-[var(--color-lightWhite)] ">
                {commit.description}
              </p>
              <p className="dark:text-[var(--color-lightWhite)] ">
                {new Date(commit.createdAt).toLocaleDateString("nb-NO")}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
