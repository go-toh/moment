import { createContext, useState, useContext } from "react";

const AppStateContext = createContext();
export const useAppState = () => useContext(AppStateContext);

function AppStateProvider({ children }) {
    const [appState, setAppState] = useState("home");

    return (
        <AppStateContext.Provider value={{ appState,  setAppState }} >
            { children }
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;