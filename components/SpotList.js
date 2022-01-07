import { Box } from "@mui/system";
import Spot from "./Spot";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";

function SpotList() {
    const { spots } = useSpotDataState();

    return (
        <Box sx={{ mx: 2, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                spots.map((spot, index)=> <Spot key={index}{...spot} />)
            }
        </Box>
    )
}

export default SpotList;