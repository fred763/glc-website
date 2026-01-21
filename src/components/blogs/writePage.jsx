// File: components\blogs\writePage.jsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { addBlog, updateBlog, getBlogBySlug } from "../../utils/firebase/firestore";
import { uploadImage } from "../../utils/firebase/storage";
// import Loader from "../../components/loader-small";
import Loader from "../loaders/loader-small";
import { updateBlogAction } from "../../app/actions/blog-update-action";
import Link from "next/link";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const ReactQuill = dynamic(
  () =>
    import("react-quill").then((mod) => {
      const Editor = ({ forwardedRef, ...props }) => <mod.default ref={forwardedRef} {...props} />;
      return Editor;
    }),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded" />,
  }
);

const WritePage = ({ blogId }) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState("");
  const [comments, setComments] = useState([]);
  const [excerpt, setExcerpt] = useState("");
  const [date, setDate] = useState(new Date());

  const fetchBlogData = async () => {
    const blogData = await getBlogBySlug(blogId);
    console.log("Blog Data:", blogData.blog.tags); // Add this log
    if (blogData.status && blogData.blog) {
      setTitle(blogData.blog.title);
      setAuthor(blogData.blog.author);
      setValue(blogData.blog.content);
      setCatSlug(blogData.blog.catSlug);
      setTags(Array.isArray(blogData.blog.tags) ? blogData.blog.tags.join(" ") : "");
      setExcerpt(blogData.blog.excerpt);
      setImage(blogData.blog.image);
      setComments(blogData.blog.comments);
      setDate(new Date(blogData.blog.date));
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setLoading(true);
    let imageUrl = image;

    if (imageFile) {
      const uploadRes = await uploadImage({
        blogPath: slugify(title),
        file: imageFile,
      });
      if (!uploadRes.status) {
        alert("Error uploading image");
        setLoading(false);
        return;
      }
      imageUrl = uploadRes.downloadURL;
    }

    const blogData = {
      title,
      author,
      date: date.toISOString(),
      content: value,
      slug: slugify(title),
      tags: tags.split(" "),
      excerpt,
      comments,
      catSlug: catSlug || "style",
      image: imageUrl,
    };

    let res;
    if (blogId) {
      res = await updateBlogAction(blogId, blogData);
      setLoading(false);
      if (res.success) {
        router.push(`/admin/blog`);
      } else {
        alert("Error saving blog");
      }
    } else {
      res = await addBlog(blogData);
      setLoading(false);
      if (res) {
        router.push(`/blog/${slugify(title)}`);
      } else {
        alert("Error saving blog");
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"], // Added "video" here
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "script",
    "link",
    "image",
    "video",
    "color",
    "background",
    "font",
    "align",
  ];

  return (
    <div className="p-8 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 py-8 "></div>
            
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
      <hr />
      <div className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">{blogId ? "Edit Blog Post" : "Create a New Blog Post"}</h1>
        <button
          className={`px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={loading}>
          {loading ? (
            <>
              {blogId ? "Updating" : "Publishing"} <Loader />
            </>
          ) : blogId ? (
            "Update"
          ) : (
            "Publish"
          )}
        </button>
      </div>

      <div className="mb-8">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
          Upload Cover Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="p-2 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={handleImageChange}
        />
      </div>

      {image && (
        <div className="mb-8">
          <Image src={image} alt="Cover Image" width={800} height={400} className="object-cover rounded-lg shadow-md" />
        </div>
      )}

      <input
        type="text"
        placeholder="Enter your title here"
        className="w-full p-4 text-3xl font-bold mb-6 rounded focus:border-green-500 focus:outline-none transition duration-300"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="grid grid-cols-3 gap-8 mb-8">
        <input
          type="text"
          placeholder="Category"
          className="w-full p-4 rounded focus:border-green-500 focus:outline-none transition duration-300"
          onChange={(e) => setCatSlug(e.target.value)}
          value={catSlug}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full p-4 rounded focus:border-green-500 focus:outline-none transition duration-300"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input
          type="text"
          placeholder="Short Description"
          className="w-full p-4 rounded focus:border-green-500 focus:outline-none transition duration-300"
          onChange={(e) => setExcerpt(e.target.value)}
          value={excerpt}
        />
      </div>
      <input
        type="datetime-local"
        placeholder="Enter date and time"
        className="mb-2 p-4 rounded focus:border-green-500 focus:outline-none transition duration-300"
        onChange={(e) => setDate(new Date(e.target.value))}
        value={date.toISOString().slice(0, 16)}
      />
      {/* <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Start writing your blog post..."
        className="h-96 mb-12"
      /> */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Start writing your blog post..."
        className="h-96 mb-12"
      />
      <textarea
        name="tags"
        id="tags"
        rows="4"
        cols="50"
        placeholder="tag1 tag2"
        className="w-full p-4 border border-gray-300 outline-none resize-none"
        onChange={(e) => setTags(e.target.value)}
        value={tags}
      />
    </div>
  );
};

export default WritePage;
