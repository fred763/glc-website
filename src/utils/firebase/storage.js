// File: utils\firebase\storage.js
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "./config";

const storage = getStorage(app);

export const uploadImage = async ({ blogPath, file }) => {
    try {
        const storageRef = ref(storage, `blogs/${blogPath}/${file.name.replaceAll(' ', '_')}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return { status: true, downloadURL };
    } catch (error) {
        console.log(error);
        return { status: false, error };
    }
}


