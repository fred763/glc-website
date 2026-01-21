// File: utils/firebase/firestore.js

import { getFirestore, collection, setDoc, getDocs, updateDoc, doc, deleteDoc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Add at the top of firestore.js
const convertTimestamps = (data) => {
    if (!data) return data;
    return Object.entries(data).reduce((acc, [key, value]) => {
      if (value?.toDate instanceof Function) {
        acc[key] = value.toDate().toISOString();
      } else if (value && typeof value === 'object') {
        acc[key] = convertTimestamps(value);
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});
  };

export const addContact = async (programName, contactData) => {
    try {
        const docRef = doc(db, "contacts", "fEh3iTTqfT9adfg1ryoP");
        const programCollectionRef = collection(docRef, programName.toLowerCase());
        const querySnapshot = await getDocs(programCollectionRef);
        const res = await addDoc(programCollectionRef, contactData);
        return { ok: true, res };
    } catch (error) {
        return { ok: false, error: error.message }
    }
}

export const deleteContact = async (programName, id) => {
    try {
        const docRef = doc(db, "contacts", "fEh3iTTqfT9adfg1ryoP");
        const programCollectionRef = collection(docRef, programName);
        const contactDocRef = doc(programCollectionRef, id);
        console.log(contactDocRef)
        await deleteDoc(contactDocRef);
        return { ok: true };
    }
    catch (error) {
        return { ok: false, error: error.message };
    }
}

export const getContactsFromProgram = async (programName) => {
    try {
        const docRef = doc(db, "contacts", "fEh3iTTqfT9adfg1ryoP");
        const programCollectionRef = collection(docRef, programName);
        const programDocs = await getDocs(programCollectionRef);
        const data = programDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return { ok: true, data }
    } catch (error) {
        return { ok: false, error: error.message }
    }
}

// BLOG FUNCTIONS
export const addBlog = async (document) => {
    console.log('Starting blog creation:', document);
    if (!document.slug) {
        console.error('Blog creation failed: No slug provided');
        return { status: false, message: "Slug is required" };
    }
    try {
        const docRef = doc(db, "blogs", document.slug);
        const blogData = {
            ...document,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        console.log('Creating blog with data:', blogData);
        await setDoc(docRef, blogData);
        console.log('Blog created successfully');
        return { status: true, message: "Blog added successfully", ref: document.slug };
    } catch (e) {
        console.error("Error adding blog:", e);
        return { status: false, message: "Error adding document: " + e.message };
    }
}

// export const getAllBlogs = async () => {
//     console.log('Fetching all blogs');
//     try {
//         const querySnapshot = await getDocs(collection(db, "blogs"));
//         const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         console.log('Retrieved blogs count:', blogs.length);
//         return { status: true, blogs };
//     } catch (e) {
//         console.error("Error getting blogs:", e);
//         return { status: false, message: "Error getting documents: " + e.message };
//     }
// }

export const getAllBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogs = querySnapshot.docs.map(doc => 
        convertTimestamps({ id: doc.id, ...doc.data() })
      );
      return { status: true, blogs };
    } catch (e) {
      return { status: false, message: "Error getting documents: " + e.message };
    }
  }

// export const getBlogBySlug = async (slug) => {
//     console.log('Fetching blog with slug:', slug);
//     try {
//         const docRef = doc(db, "blogs", slug);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//             console.log('Blog found:', docSnap.id);
//             return { status: true, blog: { id: docSnap.id, ...docSnap.data() } };
//         } else {
//             console.log('No blog found with slug:', slug);
//             return { status: false, message: "No blog post found with this slug!" };
//         }
//     } catch (error) {
//         console.error("Error getting blog:", error);
//         return { status: false, message: "Error getting blog post: " + error.message };
//     }
// }
export const getBlogBySlug = async (slug) => {
    try {
      const docRef = doc(db, "blogs", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { 
          status: true, 
          blog: convertTimestamps({ id: docSnap.id, ...docSnap.data() })
        };
      }
      return { status: false, message: "No blog post found with this slug!" };
    } catch (error) {
      return { status: false, message: "Error getting blog post: " + error.message };
    }
  }

export const deleteBlog = async (slug) => {
    console.log('Starting blog deletion:', slug);
    try {
        const docRef = doc(db, "blogs", slug);
        await deleteDoc(docRef);
        console.log('Blog deleted successfully');
        return { status: true, message: "Blog deleted successfully" };
    } catch (error) {
        console.error('Error deleting blog:', error);
        return { status: false, message: "Error deleting blog: " + error.message };
    }
}

export const updateBlog = async (oldSlug, updates) => {
    console.log('Starting blog update:', { oldSlug, updates });
    try {
        const oldDocRef = doc(db, "blogs", oldSlug);
        const newSlug = updates.slug || oldSlug;

        // Verify the document exists before updating
        const docSnap = await getDoc(oldDocRef);
        if (!docSnap.exists()) {
            console.error('Blog not found:', oldSlug);
            return { status: false, message: "Blog not found" };
        }

        // Prepare update data
        const updateData = {
            ...updates,
            updatedAt: new Date()
        };

        console.log('Update operation details:', { oldSlug, newSlug, updateData });

        if (newSlug !== oldSlug) {
            console.log('Slug changed, creating new document');
            const newDocRef = doc(db, "blogs", newSlug);
            await setDoc(newDocRef, updateData);
            await deleteDoc(oldDocRef);
        } else {
            console.log('Updating existing document');
            await updateDoc(oldDocRef, updateData);
        }
        
        console.log('Blog update completed successfully');
        return { status: true, message: "Blog updated successfully" };
    } catch (error) {
        console.error("Error updating blog:", error);
        return { status: false, message: "Error updating blog: " + error.message };
    }
}

