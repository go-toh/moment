import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from 'react';
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from '../src/firebaseConfig';
import { useSignInState } from '../contexts/SignInStateProvider';

import Image from 'next/image';

function Spot(spot) {
    //const {spotID, imgURL, photoURL, title, displayName, postTime} = spot;
    const {spotImageURL, photoURL, spotTitle, displayName, postTime} = spot;
    const [getImgURL, setGetImgURL] = useState('');
    const [displayTime, setDisplayTime] = useState('');
    const { userState } = useSignInState();

    const clickActionArea = () => {
        console.log("click");
    };
 
    useEffect(() => {
        if(userState) {
            const gsReference = ref(storage, spotImageURL);
            getDownloadURL(gsReference).then((url) => { setGetImgURL(url) });
        } else {
            setGetImgURL("");
        }
    }, [userState]);

    useEffect(() => {
        const date = postTime.toDate();
        const time = date.getFullYear()
                            + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
                            + '/' + ('0' + date.getDate()).slice(-2);
        setDisplayTime(time);
    }, [])

    const CardImage = () => {
        if(getImgURL) return <Image src={getImgURL}width={340} height={220} /> 
        else return <Skeleton variant="rectangular" width={340} height={220} animation="wave"/>
    }

    
    
    return (
        <Card sx={{ maxWidth: 340, minWidth: 340, m: 1 }}>
            <CardActionArea onClick={ clickActionArea }>
            <CardImage />
            <CardHeader
            avatar={
                <Avatar alt="avatar image" src={ photoURL } />
            }
            title={ spotTitle }
            subheader={
                <Box sx={{ display:'flex',  justifyContent: 'space-between' }}>
                    <Typography>{ displayName }</Typography>
                    <Typography >{ displayTime }</Typography>
                </Box>
            }
            />
            </CardActionArea>
        </Card>
    );
}

/*
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
            console.log(getImgURL)
        } else {
            setGetImgURL("");
        }
    }, [userState]);

    const CardImage = () => {
        if(getImgURL) return <Image src={getImgURL}width={340} height={220} /> 
        else return <Skeleton variant="rectangular" width={340} height={220} animation="wave"/>
    }
    
    return (
        <Card sx={{ maxWidth: 340, minWidth: 340, m: 1 }}>
            <CardActionArea onClick={ clickActionArea }>
            <CardImage />
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
            </CardActionArea>
        </Card>
    );
}*/

export default Spot;