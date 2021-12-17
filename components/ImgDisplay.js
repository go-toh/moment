import { useEffect, useState } from 'react';
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from '../src/firebaseConfig';
import { useSignInState } from '../contexts/SignInStateProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ImgDisplay() {
    const [imgURL, setImgURL] = useState("");
    const { userState } = useSignInState();

    useEffect(() => {
        if(userState) {
            const gsReference = ref(storage, 'gs://moment-1c456.appspot.com/1.jpg');
            getDownloadURL(gsReference).then((url) => { setImgURL(url) });
        } else {
            setImgURL("");
        }
    }, [userState]);
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="300"
            image= { imgURL }
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
        </Card>
    );
}

export default ImgDisplay;