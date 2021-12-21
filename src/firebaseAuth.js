import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'

export const firebaseAuthSignInPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
        .then((result) => {
            console.log("SignIn Success");
        }).catch((error) => {
            console.error(error)
        })
}
