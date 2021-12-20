import { useEffect, useState } from 'react';
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from '../src/firebaseConfig';
import { useSignInState } from '../contexts/SignInStateProvider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';

function Post({imgURL, photoURL, title, displayName, postTime}) {
    const [getImgURL, setGetImgURL] = useState("");
    const { userState } = useSignInState();
    useEffect(() => {
        if(userState) {
            console.log(imgURL);
            const gsReference = ref(storage, imgURL);
            getDownloadURL(gsReference).then((url) => { setGetImgURL(url) });
        } else {
            setGetImgURL("");
        }

    }, [userState]);
    return (
        <Card sx={{ maxWidth: 350, minWidth: 350,
                    m : 2 }}>
            <CardActionArea>
            <CardMedia
            component="img"
            height="220"
            image= { getImgURL }
            />
            </CardActionArea>
            
            
            <CardHeader
            avatar={
            <Avatar alt="avatar image" src={ photoURL } />
            }
            title={ title }
            subheader={
            <Box sx={{ display:'flex' }}>
                <Typography>{ displayName }</Typography>
                <Typography sx={{pl:3}}>{ postTime }</Typography>
            </Box>
            
            }
            />
        </Card>
    );
}

export default Post;