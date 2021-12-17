import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../src/firebaseConfig";
import { isCreatedAccount, createAccount } from "../src/firebaseFirestore";

const SignInStateContext = createContext();
export const useSignInState = () => useContext(SignInStateContext);

function SignInStateProvider({ children }) {
    const [userState, setUserState] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log("onAuthChanged signIn");

                isCreatedAccount(user.uid).then((result) => {
                    if(!result) createAccount(user);
                })

                setUserState({
                    displayName: user.displayName,
                    uid: user.uid,
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