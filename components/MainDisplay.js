import { useNavigationBarState } from '../contexts/NavigationBarStateProvider';
import SpotList from "./SpotList";
import Setting from './Setting';
import { Box } from '@mui/material';

function MainDisplay() {
    const { naviBarState } = useNavigationBarState();
    const changeDisplay = () => {
        switch (naviBarState) {
            case "Home":
            return <SpotList />;
            case "Serch":
            return <div></div>;
            case "Post":
            return <div></div>;
            case "MyPage":
            return <div></div>;
            case "Setting":
            return <Setting />;
            default:
            return <SpotList />;
      }
    }
    return (
        <>
            <Box sx={{ mb: 7 }}>
                { changeDisplay() }  
            </Box>
            
        </>
    )
}

export default MainDisplay;