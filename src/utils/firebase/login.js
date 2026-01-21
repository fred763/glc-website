// File: utils\firebase\login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./auth";

export const logInWithEmailAndPassword = async (email, password ) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorMessage = error.message;
    return { error: errorMessage }
  }
};
