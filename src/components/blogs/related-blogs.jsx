// File: components\blogs\related-blogs.jsx
"use client";

import { useAllBlogContext } from "../../context/all-blogs";
import Link from "next/link";
import Image from "next/image";

const RelatedPostsClient = ({ currentBlogCatSlug, currentBlogSlug }) => {
  const { allBlogs, allBlogsLoading } = useAllBlogContext();
  const relatedPosts = allBlogs.filter(
    (blog) =>
      blog.catSlug === currentBlogCatSlug && blog.slug !== currentBlogSlug
  );


  if (allBlogsLoading) return <span>Loading...</span>;
  if (relatedPosts.length === 0) return <span>No Related Blog post available</span>;

  return (
    <div>
      {relatedPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
          <div className="relative h-48 w-full mb-4">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
            {post.title}
          </h3>
          <p>{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPostsClient;
