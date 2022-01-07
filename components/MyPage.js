import Box from "@mui/material/Box";
import Spot from "./Spot";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { useSignInState } from "../contexts/SignInStateProvider";
import { useEffect } from "react";

function MyPage() {
    const { mySpots, exeMySpots } = useSpotDataState();
    const { userState } = useSignInState();

    useEffect(() => {
        exeMySpots(userState.uid);
    }, [])

    return (
        <Box sx={{ mx: 2, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                mySpots.map((spot, index)=> <Spot key={index}{...spot} />)
            }
        </Box>
    )
}

export default MyPage;