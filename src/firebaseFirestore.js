import { db } from "./firebaseConfig";
import { doc, getDoc, getDocs, setDoc, deleteDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

export const isCreatedAccount = async(uid) => {
    const userDocRef = doc(db, "users", uid);
    const docSnap = await getDoc(userDocRef);
    return docSnap.exists();
};

export const createAccount = async(user) => {
    await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL
    });
};

export const postNewSpot = async(user, title, explain, area, season, time, weather, imageURL, nowTime, GPS, dateTimeOriginal) => {
    const newRef = doc(collection(db, "spots"));
    console.log(newRef.id);
    await setDoc(newRef, {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        spotTitle: title,
        spotExplain: explain,
        spotArea: area,
        spotSeason: season,
        spotTime: time,
        spotWeather: weather,
        spotImageURL: imageURL,
        postTime: nowTime,
        spotGPS: GPS,
        spotDateTimeOriginal: dateTimeOriginal
    });

    //await updateDoc(doc(db, "users", user.uid), {
    //    postList: arrayUnion(newRef.id)
    //});
}

export const getSpots = async() => {
    const spotsSnapshot = await getDocs(collection(db, "spots"));
    return spotsSnapshot;
}

export const deleteSpot = async(docID) => {
    await deleteDoc(doc(db, "spots", docID));
}