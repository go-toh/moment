import Box from "@mui/material/Box";
import Spot from "./Spot";
import Button from "@mui/material/Button";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { useNavigationBarState  } from "../contexts/NavigationBarStateProvider";
import { useEffect, useState } from "react";

function FilterSpotList() {
    const { spots, filterConditions } = useSpotDataState();
    const { setNaviBarState } = useNavigationBarState ();
    const [ filterSpots, setFilterSpots] = useState([]);

    useEffect(() => {
        setFilterSpots(spots.filter(spot =>
            spot.spotArea == filterConditions.spotArea || 
            spot.spotSeason == filterConditions.spotSeason ||
            spot.spotTime == filterConditions.spotTime ||
            spot.spotWeather == filterConditions.spotWeather))
    }, [spots])

    const handleClick = () => {
        setNaviBarState("Search");
    }

    return (
        <>
            <Box sx={{ mx: 2, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    filterSpots.map((spot, index)=> <Spot key={index}{...spot} />)
                }
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 2}}>
                <Button onClick={handleClick} sx={{mb: 3}} variant="contained"  >
                        検索
                </Button>
            </Box>
        </>
    )
}

export default FilterSpotList;