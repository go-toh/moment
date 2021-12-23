import { Box } from "@mui/system";
import postData from "../public/postData.json";
import Spot from "./Spot";

function SpotList() {
    
    return (
        <Box sx={{ m:1, display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                postData.map((post, index) => <Spot key={index}{...post}/>)
            }
        </Box>
    )
}

export default SpotList;