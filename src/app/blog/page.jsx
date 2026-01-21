// File: app\blog\page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useAllBlogContext } from "../../context/all-blogs";
import BigLoader from "../../components/loaders/loader-full";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link"
import Image from "next/image"

function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={256}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className="text-sm block text-gray-600 mb-2">
          {blog?.date
            ? new Date(blog.date).toLocaleDateString()
            : new Date().toLocaleDateString()}{" "}
          | BY {blog.author.toUpperCase()}
        </span>
        <h3 className="text-xl font-bold text-[#333] mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-sky-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </Link>
  );
}

const Timeline = ({ blogs }) => {
  const [expandedYears, setExpandedYears] = useState({});
  const [expandedMonths, setExpandedMonths] = useState({});

  const groupedBlogs = blogs.reduce((acc, blog) => {
    const date = new Date(blog.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(blog);
    
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedBlogs).sort((a, b) => b - a);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const toggleYear = (year) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonths(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Timeline</h3>
      <ul className="space-y-2">
        {sortedYears.map(year => (
          <li key={year} className="mb-2">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => toggleYear(year)}
            >
              {expandedYears[year] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              <span className="font-semibold ml-1">{year}</span>
            </div>
            {expandedYears[year] && (
              <ul className="ml-6 mt-1 space-y-1">
                {months.map(month => (
                  groupedBlogs[year][month] && (
                    <li key={month} className="mb-1">
                      <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => toggleMonth(year, month)}
                      >
                        {expandedMonths[`${year}-${month}`] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        <span className="font-medium ml-1">{month}</span>
                        <span className="text-gray-500 text-sm ml-2">({groupedBlogs[year][month].length})</span>
                      </div>
                      {expandedMonths[`${year}-${month}`] && (
                        <ul className="ml-6 mt-1 text-sm text-gray-600">
                          {groupedBlogs[year][month].slice(0, 5).map(blog => (
                            <li key={blog.id}>
                              <a href={`/blog/${blog.slug}`} className="hover:underline">
                                {blog.title}
                              </a>
                            </li>
                          ))}
                          {groupedBlogs[year][month].length > 5 && (
                            <li className="text-sky-500 hover:underline cursor-pointer">
                              See {groupedBlogs[year][month].length - 5} more...
                            </li>
                          )}
                        </ul>
                      )}
                    </li>
                  )
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function BlogListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { allBlogs, allBlogsLoading, allBlogsError } = useAllBlogContext();
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  useEffect(() => {
    if (allBlogs && !allBlogsError) {
      const published = allBlogs.filter((blog) => blog.published);
      published.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort blogs by date, newest first
      setPublishedBlogs(published);
      setFilteredBlogs(published);
      const uniqueCategories = [
        ...new Set(published.map((blog) => blog.catSlug)),
      ];
      setCategories(["All", ...uniqueCategories]);
    }
  }, [allBlogs, allBlogsError]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = publishedBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(publishedBlogs);
    } else {
      const filtered = publishedBlogs.filter(
        (blog) => blog.catSlug === category
      );
      setFilteredBlogs(filtered);
    }
  };

  if (allBlogsLoading) {
    return (
      <div>
        <BigLoader />
      </div>
    );
  }

  if (allBlogsError) {
    return <div>Error loading blogs. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <div className="w-full">
        <div
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: "url(/images/blog.jpg)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <h1 className="text-4xl font-bold text-white text-center px-4">
              Stay Informed: Explore Our Latest Insights and Stories
            </h1>
          </div>
        </div>
      </div>
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <form onSubmit={handleSearch} className="mb-8">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-full px-4 py-2 rounded-l-lg border-2 border-sky-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-sky-500 text-white px-6 py-2 rounded-r-lg hover:bg-sky-600 transition duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryFilter(category)}
                      className={`px-4 py-2 rounded-full ${
                        selectedCategory === category
                          ? "bg-sky-500 text-white"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            <aside className="md:w-1/4">
              <Timeline blogs={publishedBlogs} />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}