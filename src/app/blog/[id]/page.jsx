"use client";
// File: app/blog/[id]/page.jsx

import { useState, useEffect } from "react";
import { Calendar, User } from "lucide-react";
import { getBlogBySlug } from "../../../utils/firebase/firestore";
import blogContentStyles from "./blog.module.css";
import RelatedPostsClient from "../../../components/blogs/related-blogs";
import ShareBlog from "./shareBlog";
import { useParams } from "next/navigation";

// Blog header component
function BlogHeader({ blog }) {
  return (
    <div className="w-full mt-20 sm:mt-0">
      <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-white text-xs sm:text-sm">
            <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            <span>{blog.author.toUpperCase()}</span>
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 ml-4 mr-2" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="mt-4">
            <ShareBlog url={blog.slug} iconSize={34} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogContent({ blog }) {
  return (
    <article className="bg-white rounded-lg shadow-lg py-6 px-4 sm:px-6 md:px-8">
      <div
        className={`prose max-w-none ${blogContentStyles.blogcss}`}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      {blog.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {blog.tags
            .filter(Boolean)
            .map((tag, index) => (
              <span
                key={index}
                className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
        </div>
      )}
    </article>
  );
}

// Main blog page component
export default function BlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(params.id);
        if (data?.status) {
          setBlog(data.blog);
          document.title = data.blog.title || "Blog Post";
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>{error || "Blog post not found"}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <BlogHeader blog={blog} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="lg:w-[80%]">
            <BlogContent blog={blog} />
            
            <section className="mt-12 pl-4">
              <ShareBlog url={blog.slug} iconSize={42} />
            </section>
          </main>

          <aside className="lg:w-1/3">
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Related Posts
              </h2>
              <RelatedPostsClient
                currentBlogCatSlug={blog.catSlug}
                currentBlogSlug={blog.slug}
              />
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

// // File: app\blog\[id]\page.jsx
// import { Calendar, User } from "lucide-react";
// import {getBlogBySlug,getAllBlogs} from "../../../utils/firebase/firestore"
// import blogContentStyles from "./blog.module.css";
// import RelatedPostsClient from "../../../components/blogs/related-blogs";
// import ShareBlog from "./shareBlog";
// import { notFound } from "next/navigation";

// export const dynamicParams = true;

// export async function generateMetadata({ params }) {
//   const blog = await getBlogBySlug(params.id);
  
//   if (!blog?.status) {
//     return {
//       title: 'Blog Post Not Found',
//       description: 'The requested blog post could not be found.',
//     };
//   }

//   return {
//     title: blog.blog.title,
//     description: blog.blog.excerpt,
//     openGraph: {
//       title: blog.blog.title,
//       description: blog.blog.excerpt,
//       images: [{ url: blog.blog.image }],
//       type: 'article',
//       authors: [blog.blog.author],
//       publishedTime: blog.blog.date,
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: blog.blog.title,
//       description: blog.blog.excerpt,
//       images: [blog.blog.image],
//     },
//   };
// }

// export const revalidate = 86400; // 24 hours

// // Static params generation for static site generation
// export async function generateStaticParams() {
//   try {
//     const data = await getAllBlogs();
//     if (!data?.status) return [];
    
//     return data.blogs.map((blog) => ({
//       id: blog.slug,
//     }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// }

// // Blog header component
// function BlogHeader({ blog }) {
//   return (
//     <div className="w-full mt-20 sm:mt-0">
//       <div
//         className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
//         style={{ backgroundImage: `url(${blog.image})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
//             {blog.title}
//           </h1>
//           <div className="flex items-center text-white text-xs sm:text-sm">
//             <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
//             <span>{blog.author.toUpperCase()}</span>
//             <Calendar className="h-3 w-3 sm:h-4 sm:w-4 ml-4 mr-2" />
//             <span>{new Date(blog.date).toLocaleDateString()}</span>
//           </div>
//           <div className="mt-4">
//             <ShareBlog url={blog.slug} iconSize={34} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function BlogContent({ blog }) {
//   return (
//     <article className="bg-white rounded-lg shadow-lg py-6 px-4 sm:px-6 md:px-8">
//       <div
//         className={`prose max-w-none ${blogContentStyles.blogcss}`}
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />
//       {blog.tags?.length > 0 && (
//         <div className="mt-6 flex flex-wrap gap-2">
//           {blog.tags
//             .filter(Boolean)
//             .map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs sm:text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//         </div>
//       )}
//     </article>
//   );
// }

// // Main blog page component
// export default async function BlogPage({ params }) {
//   // Fetch blog data
//   const data = await getBlogBySlug(params.id);
  
//   // Handle 404
//   if (!data?.status) {
//     notFound();
//   }

//   const blogPost = data.blog;

//   return (
//     <div className="flex flex-col min-h-screen bg-zinc-100">
//       <BlogHeader blog={blogPost} />
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <main className="lg:w-[80%]">
//             <BlogContent blog={blogPost} />
            
//             <section className="mt-12 pl-4">
//               <ShareBlog url={blogPost.slug} iconSize={42} />
//             </section>
//           </main>

//           <aside className="lg:w-1/3">
//             <section className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
//                 Related Posts
//               </h2>
//               <RelatedPostsClient
//                 currentBlogCatSlug={blogPost.catSlug}
//                 currentBlogSlug={blogPost.slug}
//               />
//             </section>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }