// File: components\blogs\comments-blogs.jsx
"use client";
import { useState } from "react";
import { updateBlogByID } from "@/utils/firebase/firestore";

const Comments = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Anonymous",
        date: new Date().toLocaleDateString(),
        content: newComment.trim(),
      };
      setComments([...comments, comment]);
      updateBlogByID(post.id, { comments: [...comments, comment] });
      setNewComment("");
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Add a comment..."
          rows="3"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span className="font-semibold text-gray-900">
              {comment.author}
            </span>
            <span className="text-gray-600 text-sm ml-4">{comment.date}</span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
