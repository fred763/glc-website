"use client";
// File: app/admin/blog/page.jsx

import { useState, useEffect } from "react";
import { getAllBlogs } from "../../../utils/firebase/firestore";
import { BlogsTable } from "../../../components/blogs/BlogsTable";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await getAllBlogs();
        if (result && result.status && result.blogs) {
          setBlogs(result.blogs);
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-24">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-24">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-24">
      <BlogsTable blogs={blogs} />
    </div>
  );
}

// // File: app\admin\blog\page.jsx
// // src/app/admin/blog/page.jsx

// import { getAllBlogs } from "../../../utils/firebase/firestore";
// import { BlogsTable } from "../../../components/blogs/BlogsTable";

// export default async function Page() {
//   let blogs;
//   try {
//     blogs = await getAllBlogs();
//   } catch (e) {
//     console.log(e);
//   }
//   return (
//     <div className="flex flex-col items-center justify-center w-full h-full mt-24">
   
//       <BlogsTable blogs={blogs.blogs} />
//     </div>
//   );
// }
