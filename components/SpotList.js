import { Box } from "@mui/system";
import SpotData from "../public/spotData.json";
import Spot from "./Spot";

function SpotList() {
    return (
        <Box sx={{ mx: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                SpotData.map((spot, index) => <Spot key={index}{...spot} />)
            }
        </Box>
    )
}

export default SpotList;