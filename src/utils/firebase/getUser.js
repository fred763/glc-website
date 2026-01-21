// File: utils\firebase\getUser.js
import auth from "./auth";
import { onAuthStateChanged } from "firebase/auth";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Unsubscribe immediately after getting the user state
      if (user) {
        // User is signed in
        console.log(user)
        resolve(user);
      } else {
        // User is signed out

        resolve(null);
      }
    }, reject);
  });
};