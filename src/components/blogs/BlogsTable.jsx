// File: components\blogs\BlogsTable.jsx
"use client";

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { updateBlog, deleteBlog } from "../../utils/firebase/firestore";
import toast from "react-hot-toast";

export const BlogsTable = ({ blogs: initialBlogs }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialBlogs) {
      setBlogs(initialBlogs);
    }
  }, [initialBlogs]);

  const togglePublished = async (id) => {
    if (!blogs) return;
    const blogToUpdate = blogs.find((blog) => blog.id === id);
    const newPublishedState = !blogToUpdate.published;

    try {
      await updateBlog(id, { published: newPublishedState });
      setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, published: newPublishedState } : blog)));
      toast.success("Blog published state updated successfully");
    } catch (error) {
      console.error("Failed to update blog published state:", error);
      toast.error("Failed to update blog published state");
    }
  };

  const toggleFeatured = async (id) => {
    if (!blogs) return;
    const blogToUpdate = blogs.find((blog) => blog.id === id);
    const newFeaturedState = !blogToUpdate.featured;

    try {
      await updateBlog(id, { featured: newFeaturedState });
      setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, featured: newFeaturedState } : blog)));
      toast.success("Blog featured state updated successfully");
    } catch (error) {
      console.error("Failed to update blog featured state:", error);
      toast.error("Failed to update blog featured state");
    }
  };

  const deleteBlogEntry = async (id) => {
    if (!blogs) return;
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
      toast.success("Blog entry deleted successfully");
    } catch (error) {
      console.error("Failed to delete blog entry:", error);
      toast.error("Failed to delete blog entry");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading blogs...</div>;
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 mb-4">No blogs found</h2>
          <Link href="/admin/blog/add-blog" className="bg-green-300 px-4 py-2 rounded">
            Add Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-3 min-h-screen">
      <div className="container mx-auto px-6 py-8 mt-10"></div>
      <div className="flex justify-between items-center">
        <h1 className="my-4 mx-2 text-xl font-semibold">Manage Blogs</h1>
        <div className="flex gap-4">
          <Link href="/admin" className="bg-green-300 px-4 py-2 rounded">
            Dashboard
          </Link>
          <Link href="/admin/blog/add-blog" className="bg-green-300 px-4 py-2 rounded">
            Add Blog
          </Link>
        </div>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {blogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap">{blog.title}</td>
              <td className="px-4 py-4 whitespace-nowrap">{blog.author}</td>
              <td className="px-4 py-4 whitespace-nowrap">{blog.catSlug}</td>
              <td className="px-4 py-4 whitespace-nowrap">{new Date(blog.date).toLocaleDateString()}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    blog.published ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                  {blog.published ? "Published" : "Draft"}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    blog.featured ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"
                  }`}>
                  {blog.featured ? "Featured" : "Not Featured"}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap space-x-2">
                <button onClick={() => togglePublished(blog.id)} className="text-blue-600 hover:text-blue-900">
                  {blog.published ? "Unpublish" : "Publish"}
                </button>
                <button onClick={() => toggleFeatured(blog.id)} className="text-yellow-600 hover:text-yellow-900">
                  {blog.featured ? "Unfeature" : "Feature"}
                </button>
                <Link href={`/admin/blog/edit-blog/${blog.slug}`} className="text-green-600 hover:text-green-900">
                  Edit
                </Link>
                <button onClick={() => deleteBlogEntry(blog.id)} className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsTable;
