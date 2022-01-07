import { useNavigationBarState } from "../contexts/NavigationBarStateProvider";
import SpotList from "./SpotList";
import Setting from "./Setting";
import SearchPost from "./SearchPost";
import Post from "./Post";
import MyPage from "./MyPage";
import { Box } from "@mui/material";
import FilterSpotList from "./FilterSpotList";

function MainDisplay() {
    const { naviBarState } = useNavigationBarState();
    const ChangeDisplay = () => {
        switch (naviBarState) {
            case "Home":
                return <SpotList />;
            case "Search":
                return <SearchPost />;
            case "Filter":
                return <FilterSpotList />;
            case "Post":
                return <Post />;
            case "MyPage":
                return <MyPage />;
            case "Setting":
                return <Setting />;
            default:
                return <SpotList />;
      }
    }
    return (
        <>
            <Box sx={{ mb: 7, width: "100%", height: "100%"}}>
                <ChangeDisplay />
            </Box>
        </>
    )
}

export default MainDisplay;