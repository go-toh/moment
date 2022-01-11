import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from '@mui/material/IconButton';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
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

function MyPostListItem(spot) {
    const {spotImageURL, photoURL, spotTitle, spotExplain, spotArea, spotSeason, spotTime, spotWeather, displayName, postTime} = spot;
    const [open, setOpen] = useState(false);
    const [getImgURL, setGetImgURL] = useState("");
    
    const { userState } = useSignInState();

    useEffect(() => {
        if(userState) {
            const gsReference = ref(storage, spotImageURL);
            getDownloadURL(gsReference).then((url) => { setGetImgURL(url) });
        } else {
            setGetImgURL("");
        }
    }, [userState]);

    const handleDeleteClick = () => {
        console.log("click");
    } 

    const handleItemClick = () => {
        console.log("click");
        setOpen(true);
    }

    const handleClose = () => {
        console.log("click");
        setOpen(false);
      };

    const CardImage = () => {
        if(getImgURL) return <Image src={getImgURL}width={340} height={220} /> 
        else return <Skeleton variant="rectangular" width={340} height={220} animation="wave"/>
    }

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
        <ListItem
            secondaryAction={
                <IconButton
                    aria-label="delete spot"
                    component="span"
                    edge="end"
                    onClick={ handleDeleteClick } >
                    <DeleteIcon />
                </IconButton> }
                disablePadding
            >
            
            <ListItemButton onClick={ handleItemClick }>
              <ListItemAvatar>
                <Avatar
                  src= { photoURL }
                />
              </ListItemAvatar>
              <ListItemText primary={ spotTitle } />
            </ListItemButton>
        </ListItem>
        </>
    )
}

export default MyPostListItem;