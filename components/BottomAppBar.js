import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppState } from "../contexts/AppStateProvider";

function BottomAppBar() {
  const { appState, setAppState } = useAppState();
  const Home = () => setAppState("Home");
  const Serch = () => setAppState("Serch");
  const Post = () => setAppState("Post");
  const MyPage = () => setAppState("MyPage");
  const Setting = () => setAppState("Setting");
  console.log(appState);
    return (
      <>
        <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar>
            <IconButton onClick={Home} color="inherit" aria-label="open drawer">
              <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={Serch} color="inherit">
              <SearchIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={Post} color="inherit">
              <AddIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={MyPage} color="inherit">
              <PersonIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={Setting} color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    )};

export default BottomAppBar;