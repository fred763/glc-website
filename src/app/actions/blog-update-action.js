// File: app\actions\blog-update-action.js
'use server'

import { updateBlog } from "../../utils/firebase/firestore";
import { revalidatePath } from "next/cache";

export async function updateBlogAction(blogId, blogData) {
  try {
    const result = await updateBlog(blogId, blogData);
    if (result) {
      revalidatePath(`/blog/${blogId}`);
      return { success: true };
    } else {
      return { success: false, error: "Error saving blog" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
