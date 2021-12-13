import React, { createContext, useState, useContext } from "react";

const SignInStateContext = createContext();
export const useSignInState = () => useContext(SignInStateContext);

function SignInStateProvider({ children }) {
    const [userState, setUserState] = useState({
        isSignIn: false,
        displayName: "",
        email: "",
        photoURL: "",
    });

    const setUser = user => setUserState(user);

    const setSignOutState = () => setUserState({ ...userState, isSignIn: false });

    const setInitUser = () => setUserState({
        isSignIn: false,
        displayName: "",
        email: "",
        photoURL: "",
    })
    console.log(userState);

    return (
        <SignInStateContext.Provider value={{ userState, setUser, setSignOutState, setInitUser }}>
            { children }
        </SignInStateContext.Provider>
    );
}

export default SignInStateProvider;