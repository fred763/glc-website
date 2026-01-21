// File: utils\firebase\logout.js
import { signOut } from "firebase/auth";
import auth from "./auth";

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: "User signed out successfully",
    };
  } catch (error) {
    console.error("Sign out error:", error);
    return {
      success: false,
      message: error.message,
    };
  } 
};