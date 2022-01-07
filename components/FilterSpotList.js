import Box from "@mui/material/Box";
import Spot from "./Spot";
import Button from "@mui/material/Button";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { useNavigationBarState  } from "../contexts/NavigationBarStateProvider";

function FilterSpotList() {
    const { filterSpots } = useSpotDataState();
    const { setNaviBarState } = useNavigationBarState ();

    const handleClick = () => {
        setNaviBarState("Search");
    }

    return (
        <Box sx={{ mx: 2, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                filterSpots.map((spot, index)=> <Spot key={index}{...spot} />)
            }
            <Button onClick={handleClick} variant="contained">
                検索
            </Button>
        </Box>
    )
}

export default FilterSpotList;