import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const saveContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "contact_forms"), formData);
    return docRef.id;
  } catch (error) {
    console.error("Error saving form:", error);
    throw new Error("Failed to save form data.");
  }
};

export const saveAuctionRegistration = async (registrationData) => {
  try {
    const docRef = await addDoc(collection(db, "auction_registrations"), registrationData);
    return docRef.id;
  } catch (error) {
    console.error("Error saving auction registration:", error);
    throw new Error("Failed to save registration data.");
  }
};

export const uploadFile = async (file, folder = "contact-uploads") => {
  try {
    const fileId = uuidv4();
    const fileName = `${fileId}-${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Optional: Handle progress updates
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve({
            name: file.name,
            size: file.size,
            type: file.type,
            url: downloadURL,
            path: storageRef.fullPath
          });
        }
      );
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file.");
  }
};

export const uploadFiles = async (files, folder = "contact-uploads") => {
  if (!files || files.length === 0) return [];
  
  try {
    const uploadPromises = files.map(file => uploadFile(file, folder));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Error uploading files:", error);
    throw new Error("Failed to upload one or more files.");
  }
};