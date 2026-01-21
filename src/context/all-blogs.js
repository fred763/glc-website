// File: context\all-blogs.js
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { getAllBlogs } from "../utils/firebase/firestore";

const AllBlogsContext = createContext();

export const AllBlogProvider = ({ children }) => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [allBlogsLoading, setAllBlogsLoading] = useState(true);
    const [allBlogsError, setAllBlogsError] = useState(null);

    const fetchAllBlogs = async () => {
        try {
            setAllBlogsLoading(true);
            const result = await getAllBlogs();
            if (result.status) {
                setAllBlogs(result.blogs);
                setAllBlogsError(null);
            } else {
                setAllBlogsError(result.message);
            }
        } catch (e) {
            setAllBlogsError(e.message);
        } finally {
            setAllBlogsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    return (
        <AllBlogsContext.Provider
            value={{
                allBlogs,
                setAllBlogs,
                allBlogsLoading,
                allBlogsError,
                refreshBlogs: fetchAllBlogs
            }}
        >
            {children}
        </AllBlogsContext.Provider>
    );
};

export const useAllBlogContext = () => useContext(AllBlogsContext);