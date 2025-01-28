import Link from "next/link";
import { Blogs } from "../types";

interface BlogCardProps {
  blog: Blogs;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="project-card hover:opacity-50 mb-8"
    >
      {/* <img
        className="max-h-44 w-full h-full object-cover object-top rounded-md"
        src={blog.heroImage}
        alt={blog.name}
      /> */}
      <div className="flex flex-col gap-1">
        <h2 className="dark:text-[var(--color-lightWhite)] ">{blog.title}</h2>
        <p className="dark:text-[var(--color-lightWhite)] line-clamp-2">
          {blog.description}
        </p>
        {/* <h3 className="dark:text-[var(--color-lightWhite)] w-full">
          Most recent update:{" "}
          {blog.lastCommit
            ? `${blog.lastCommit.title} - ${new Date(
                blog.lastCommit.createdAt
              ).toLocaleDateString("nb-NO")}`
            : "No commits yet"}
        </h3> */}
        <div className="flex flex-row gap-8">
          <h3>Total Commits: {blog.commits.length}</h3>
          <h3>
            {blog.lastCommit
              ? `Last Commit was: ${new Date(
                  blog.lastCommit.createdAt
                ).toLocaleDateString("nb-NO")}`
              : "No commits yet"}
          </h3>
        </div>
      </div>
    </Link>
  );
}
