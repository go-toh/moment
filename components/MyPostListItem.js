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
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { Link as MuiLink} from '@mui/material';
import { deleteSpot } from "../src/firebaseFirestore";
import { deleteSpotImage } from "../src/firebaseStorage";
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
    const {spotImageURL, photoURL, spotTitle, spotExplain, spotArea, spotSeason, spotTime, spotWeather, displayName, postTime, spotGPS, docID, getImageURL, spotDateTimeOriginal} = spot;
    const [open, setOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [displayDateTimeOriginal, setDisplayDateTimeOriginal] = useState("");
    const { deleteSpotsState } = useSpotDataState();

    useEffect(() => {
      if(spotDateTimeOriginal) {
        const date = spotDateTimeOriginal.toDate();
        const time = date.toLocaleString('ja-JP');
        setDisplayDateTimeOriginal(time);
      }
    }, [])

    const handleDeleteClick = () => {
        console.log("deleteClick");
        setDeleteDialogOpen(true);
    } 

    const handleItemClick = () => {
        console.log("click");
        setOpen(true);
    }

    const handleClose = () => {
        console.log("click");
        setOpen(false);
      };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    }

    const deleteSpotButton = () => {
        deleteSpot(docID);
        deleteSpotImage(spotImageURL);
        setDeleteDialogOpen(false);
        deleteSpotsState(docID)
    }

    const DeleteDialog = () => {
      return (
        <Dialog
          open={deleteDialogOpen}
          onClose={handleDeleteDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"スポットを削除しますか?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              削除したスポットを復元することはできません。
              削除ボタンをクリックすると削除されます。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={deleteSpotButton}>削除</Button>
          </DialogActions>
        </Dialog>
      )
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
                <Image src={getImageURL}width={340} height={220} /> 
                <Typography sx={{display: spotDateTimeOriginal ? "" : "none"}} gutterBottom>
                    {"撮影日時 : " + displayDateTimeOriginal}
                </Typography>
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
                <MuiLink  sx={{display:spotGPS ? "" : "none"}}
                          href={"https://www.google.com/maps/search/?api=1&query=" + spotGPS.latitude + "," + spotGPS.longitude} 
                          target="_blank" 
                          rel="noopener noreferrer"
                >
                  Google Mapで確認
                </MuiLink>
                </DialogContent>
        </BootstrapDialog>
        <DeleteDialog />
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