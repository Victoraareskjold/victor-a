"use client";
import { useEffect, useState } from "react";

import BlogCard from "@/components/BlogCard";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";
import { Blogs } from "@/types";
import { getBlogs } from "../../utils/firebaseFunctions";

export default function Blog() {
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
      setLoadingBlogs(false);
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <section className="flex flex-col w-full align-center gap-4">
        <h3 className="dark:text-[var(--color-lightWhite)]">Blog posts</h3>
        <div className="flex flex-wrap align-center">
          {loadingBlogs
            ? Array(3)
                .fill(0)
                .map((_, index) => <LoadingPlaceholder key={index} />)
            : blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
      </section>
    </main>
  );
}
