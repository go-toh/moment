import { useAppState } from '../contexts/AppStateProvider';
import SpotList from "./SpotList";
import Setting from './Setting';
import { Box } from '@mui/material';

function MainDisplay() {
    const { appState } = useAppState();
    const changeDisplay = () => {
        switch (appState) {
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
            <Box sx={{ mb:6 }}>
                { changeDisplay() }  
            </Box>
            
        </>
    )
}

export default MainDisplay;