import { storage } from "./firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export function uploadSpotImage(file) {
    const metadata = {
        contentType: 'image/jpeg'
      };

    const storageRef = ref(storage, '5.jpg');
    uploadBytes(storageRef, file, metadata).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    });
}