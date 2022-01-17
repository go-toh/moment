import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useNavigationBarState  } from "../contexts/NavigationBarStateProvider";

function BottomNavigationBar() {
  const { naviBarState, setNaviBarState } = useNavigationBarState ();

  const handleChange = (event, newValue) => {
    setNaviBarState(newValue);
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0 , left: 0, right: 0, zIndex: 10 }} elevation={3}>  
      <BottomNavigation value={ naviBarState } onChange={ handleChange }>
        <BottomNavigationAction
          label="ホーム"
          value="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="検索"
          value="Search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="投稿"
          value="Post"
          icon={<AddIcon />}
        />
        <BottomNavigationAction 
          label="インフォ" 
          value="MyPage" 
          icon={<PersonIcon />} 
        />
        <BottomNavigationAction
          label="設定" 
          value="Setting" 
          icon={<SettingsIcon />} 
        />
      </BottomNavigation>
    </Paper>
  )};

export default BottomNavigationBar;