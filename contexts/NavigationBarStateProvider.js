import { createContext, useState, useContext } from "react";

const NavigationBarStateContext = createContext();
export const useNavigationBarState = () => useContext(NavigationBarStateContext);

function NavigationBarStateProvider({ children }) {
    const [naviBarState, setNaviBarState] = useState("Home");

    return (
        <NavigationBarStateContext.Provider value={{ naviBarState,  setNaviBarState }} >
            { children }
        </NavigationBarStateContext.Provider>
    );
}

export default NavigationBarStateProvider;