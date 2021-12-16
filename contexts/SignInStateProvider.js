import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../src/firebaseConfig";

const SignInStateContext = createContext();
export const useSignInState = () => useContext(SignInStateContext);

function SignInStateProvider({ children }) {
    const [userState, setUserState] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log("onAuthChanged signIn");
                setUserState({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                });
            } else {
                console.log("onAuthChanged not signIn");
                setUserState();
            }
        }); 
    }, []);

    return (
        <SignInStateContext.Provider value={{ userState }}>
            { children }
        </SignInStateContext.Provider>
    );
}

export default SignInStateProvider;