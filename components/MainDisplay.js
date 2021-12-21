import { useAppState } from '../contexts/AppStateProvider';
import PostList from "./PostList";
import Setting from './Setting';

function MainDisplay() {
    const { appState } = useAppState();
    const resultDisplay = () => {
        switch (appState) {
            case "Home":
            return <PostList />;
            case "Serch":
            return <div></div>;
            case "Post":
            return <div></div>;
            case "MyPage":
            return <div></div>;
            case "Setting":
            return <Setting />;
            default:
            return <PostList />;
      }
    }
    console.log(resultDisplay());
    return (
        <>
            { resultDisplay() }
        </>
    )
}

export default MainDisplay;