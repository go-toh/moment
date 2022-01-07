import { createContext, useCallback, useState, useContext, useEffect } from "react";
import { getSpots } from "../src/firebaseFirestore";

const SpotDataStateContext = createContext();
export const useSpotDataState = () => useContext(SpotDataStateContext);

function SpotDataStateProvider({ children }) {
    const [spots, setSpots] = useState([]);
    const [filterSpots, setFilterSpots] = useState([]);
    const [mySpots, setMySpots] = useState([]);

    const spotsData = useCallback(async() => {
        const getSpotData = (await getSpots()).docs;
        const dataArray = getSpotData.map(doc => doc.data());
        setSpots(dataArray);
    }, []);

    useEffect(() => {
        spotsData();
    }, [setSpots, spotsData]);

    const exefilterSpots = (area, season, time, weather) => {
        setFilterSpots(spots.filter(spot => spot.spotArea == area || 
                                            spot.spotSeason == season ||
                                            spot.spotTime == time ||
                                            spot.spotWeather == weather));
    }

    const exeMySpots = (uid) => {
        setMySpots(spots.filter(spot => spot.uid == uid));
    }

    return (
        <SpotDataStateContext.Provider value={{spots, filterSpots, mySpots, exefilterSpots, exeMySpots}}>
            {children}
        </SpotDataStateContext.Provider>
    );
}

export default SpotDataStateProvider;