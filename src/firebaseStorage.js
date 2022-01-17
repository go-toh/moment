import { storage } from "./firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export function uploadSpotImage(file, imageName) {
    const metadata = {
        contentType: "image/jpeg"
      };

    const storageRef = ref(storage, imageName);
    uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log("Uploaded a blob or file!");
    });
}

export const deleteSpotImage = (spotImageURL) => {
  
}