import { Box } from "@mui/system";
import postData from "../public/postData.json";
import Post from "./Post";

function PostList() {
    
    return (
        <Box sx={{ m:1, display:'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                postData.map((post, index) => <Post key={index}{...post}/>)
            }
        </Box>
    )
}

export default PostList;