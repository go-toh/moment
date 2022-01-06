import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import SpotData from "../public/spotData.json";
import Spot from "./Spot";
import { getSpots } from '../src/firebaseFirestore';
import { async } from "@firebase/util";

function SpotList() {
    const [spots, setSpots] = useState([]);

    const spotsData = useCallback(async() => {
        const getSpotData = (await getSpots()).docs;
        const dataArray = getSpotData.map(doc => doc.data());
        return dataArray;
    }, []);

    useEffect(() => {
        spotsData().then(data => setSpots(data));
    }, [setSpots, spotsData]);

    return (
        <Box sx={{ mx: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                spots.map((spot, index)=> <Spot key={index}{...spot} />)
            }
        </Box>
    )
}

export default SpotList;