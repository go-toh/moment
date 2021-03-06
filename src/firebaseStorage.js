import { storage } from "./firebaseConfig";
import { ref, uploadBytes, deleteObject } from "firebase/storage";

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
    const desertRef = ref(storage, spotImageURL);
    deleteObject(desertRef).then(() => {
      console.log("delete Image!");
    }).catch((error) => {
      console.log(error);
    });
}