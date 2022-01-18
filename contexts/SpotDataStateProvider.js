import { createContext, useCallback, useState, useContext, useEffect } from "react";
import { getSpots } from "../src/firebaseFirestore";
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from "../src/firebaseConfig";

const SpotDataStateContext = createContext();
export const useSpotDataState = () => useContext(SpotDataStateContext);

function SpotDataStateProvider({ children }) {
    const [spots, setSpots] = useState([]);
    const [filterConditions, setFilterConditions] = useState();

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
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);

        setSpots([]);

        const getSpotData = (await getSpots()).docs;
        getSpotData.forEach(async(doc) => {
            const getImageURL = await getDownloadURL(ref(storage, doc.data().spotImageURL));
            setSpots((spots) => [...spots, {...doc.data(), docID:doc.id, getImageURL:getImageURL}]);
        })
    }

    const deleteSpotsState = (docID) => setSpots(spots.filter(spot => spot.docID !== docID));

    return (
        <SpotDataStateContext.Provider value={{spots, filterConditions, setFilterConditions, updateSpots, deleteSpotsState}}>
            {children}
        </SpotDataStateContext.Provider>
    );
}

export default SpotDataStateProvider;