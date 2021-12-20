import { db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const isCreatedAccount = async(uid) => {
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);
    return docSnap.exists();
};

export const createAccount = async(user) => {
    await setDoc(doc(db, 'users', user.uid), {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL
    });
};