import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const firebaseAuthSignInPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("SignIn Success");
        }).catch((error) => {
            console.error(error)
        })
}
