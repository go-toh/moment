import { createContext, useCallback, useState, useContext, useEffect } from "react";
import { getSpots } from "../src/firebaseFirestore";
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from "../src/firebaseConfig";

const SpotDataStateContext = createContext();
export const useSpotDataState = () => useContext(SpotDataStateContext);

function SpotDataStateProvider({ children }) {
    const [spots, setSpots] = useState([]);
    const [filterSpots, setFilterSpots] = useState([]);
    const [mySpots, setMySpots] = useState([]);

    const spotsData = useCallback(async() => {
        const getSpotData = (await getSpots()).docs;

        getSpotData.forEach(async(doc) => {
            const getImageURL = await getDownloadURL(ref(storage, doc.data().spotImageURL));
            setSpots((spots) => [...spots, {...doc.data(), docID:doc.id, getImageURL:getImageURL}]);
        })
    }, []);

    useEffect(() => {
        spotsData();
    }, [setSpots, spotsData]);

    const updateSpots = async() => {
        const getSpotData = (await getSpots()).docs;

        getSpotData.forEach(async(doc) => {
            const getImageURL = await getDownloadURL(ref(storage, doc.data().spotImageURL));
            setSpots((spots) => [...spots, {...doc.data(), docID:doc.id, getImageURL:getImageURL}]);
        })
    }

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
        <SpotDataStateContext.Provider value={{spots, filterSpots, mySpots, exefilterSpots, exeMySpots, updateSpots}}>
            {children}
        </SpotDataStateContext.Provider>
    );
}

export default SpotDataStateProvider;