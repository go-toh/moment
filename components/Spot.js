import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { useEffect, useState, forwardRef } from "react";
import {ref, getDownloadURL } from "firebase/storage";
import { storage } from "../src/firebaseConfig";
import { useSignInState } from "../contexts/SignInStateProvider";
import Image from "next/image";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

function Spot(spot) {
    const {spotImageURL, photoURL, spotTitle, spotExplain, spotArea, spotSeason, spotTime, spotWeather, displayName, postTime} = spot;
    const [getImgURL, setGetImgURL] = useState("");
    const [displayTime, setDisplayTime] = useState("");
    const { userState } = useSignInState();
    const [open, setOpen] = useState(false);

    const clickActionArea = () => {
        setOpen(true);
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
                            + "/" + ("0" + (date.getMonth() + 1)).slice(-2)
                            + "/" + ("0" + date.getDate()).slice(-2);
        setDisplayTime(time);
    }, [])

    const CardImage = () => {
        if(getImgURL) return <Image src={getImgURL}width={340} height={220} /> 
        else return <Skeleton variant="rectangular" width={340} height={220} animation="wave"/>
    }
    
    const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {spotTitle}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                <Image src={getImgURL}width={340} height={220} /> 
                <Typography gutterBottom>
                    {"説明 : " + spotExplain}
                </Typography>
                <Typography gutterBottom>
                    {"場所 : " + spotArea}
                </Typography>
                <Typography gutterBottom>
                    {"季節 : " + spotSeason}
                </Typography>
                <Typography gutterBottom>
                    {"時間 : " + spotTime}
                </Typography>
                <Typography gutterBottom>
                    {"天気 : " + spotWeather}
                </Typography>
                </DialogContent>
        </BootstrapDialog>

            <Card sx={{ maxWidth: 340, minWidth: 340, m: 1 }}>
                <CardActionArea onClick={ clickActionArea }>
                <CardImage />
                <CardHeader
                avatar={
                    <Avatar alt="avatar image" src={ photoURL } />
                }
                title={ spotTitle }
                subheader={
                    <Box sx={{ display:"flex",  justifyContent: "space-between" }}>
                        <Typography>{ displayName }</Typography>
                        <Typography >{ displayTime }</Typography>
                    </Box>
                }
                />
                </CardActionArea>
            </Card>
        </>
    );
}

export default Spot;