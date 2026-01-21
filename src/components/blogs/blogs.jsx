// File: components\blogs\blogs.jsx
"use client";
import { useMemo } from "react";
import { useAllBlogContext } from "../../context/all-blogs";
import Link from "next/link";

export default function Blogs() {
  const { allBlogs } = useAllBlogContext();

  const featuredBlogs = useMemo(() => {
    const featured = allBlogs.filter((blog) => blog.featured && blog.published);
    const selectedBlogs = [];
    const indices = new Set();

    while (selectedBlogs.length < 3 && selectedBlogs.length < featured.length) {
      const randomIndex = Math.floor(Math.random() * featured.length);
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        selectedBlogs.push(featured[randomIndex]);
      }
    }

    return selectedBlogs;
  }, [allBlogs]);

  return (
    <div className="p-8 bg-zinc-100" id="blogs">
      <div className="font-[sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl mt-10 font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-sky-400 after:rounded-full">
              Our Latest Blogs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto mb-10">
            {featuredBlogs.map((blog) => (
              <Link
              href={`/blog/${blog.slug}`}
                key={blog.id}
                className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group"
              >
                <img
                  src={blog.image || "https://readymadeui.com/Imagination.webp"}
                  alt={blog.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                  <span className="text-sm block text-gray-600 mb-2">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    | BY {blog.author.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#333]">
                    {blog.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                    <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition duration-300"
            >
              Read All Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
