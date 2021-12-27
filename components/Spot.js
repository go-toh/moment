import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from '../src/firebaseConfig';
import { useSignInState } from '../contexts/SignInStateProvider';

function Spot(spot) {
    const {spotID, imgURL, photoURL, title, displayName, postTime} = spot;
    const [getImgURL, setGetImgURL] = useState("");
    const { userState } = useSignInState();

    const clickActionArea = () => {
        console.log(spotID + "click");
    };
 
    useEffect(() => {
        if(userState) {
            const gsReference = ref(storage, imgURL);
            getDownloadURL(gsReference).then((url) => { setGetImgURL(url) });
        } else {
            setGetImgURL("");
        }
    }, [userState]);
    return (
        <Card sx={{ maxWidth: 340, minWidth: 340, m: 1 }}>
            <CardActionArea onClick={ clickActionArea }>
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
                <Box sx={{ display:'flex',  justifyContent: 'space-between' }}>
                    <Typography>{ displayName }</Typography>
                    <Typography >{ postTime }</Typography>
                </Box>
            }
            />
        </Card>
    );
}

export default Spot;