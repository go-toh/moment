import Box from "@mui/material/Box";
import List from '@mui/material/List';
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { useSignInState } from "../contexts/SignInStateProvider";
import { useEffect } from "react";
import MyPostListItem from "./MyPostListItem";

function MyPage() {
    const { mySpots, exeMySpots } = useSpotDataState();
    const { userState } = useSignInState();

    useEffect(() => {
        exeMySpots(userState.uid);
    }, [])

    return (
        <Box sx={{ mx: 1, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                //mySpots.map((spot, index)=> <Spot key={index}{...spot} />)
                mySpots.map((spot, index) => <MyPostListItem key={index}{...spot} />)
            }
            </List>
        </Box>
    )
}

export default MyPage;