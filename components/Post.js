import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { uploadSpotImage } from "../src/firebaseStorage";
import { postNewSpot } from "../src/firebaseFirestore";
import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import MenuItem from "@mui/material/MenuItem";
import { v4 } from "uuid"
import { useSignInState } from "../contexts/SignInStateProvider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import loadImage from "blueimp-load-image";

const Input = styled("input")({
  display: "none"
});

function Post() {
  const [spotImageURL, setSpotImageURL] = useState("");
  const [spotImageData, setSpotImageData] = useState("");
  const [spotTitle, setSpotTitle] = useState("");
  const [spotExplain, setSpotExplain] = useState("");
  const [spotArea, setSpotArea] = useState("");
  const [spotSeason, setSpotSeason] = useState("");
  const [spotTime, setSpotTime] = useState("");
  const [spotWeather, setSpotWeather] = useState("");
  const [spotGPS, setSpotGPS] = useState("");
  const [spotDateTimeOriginal, setSpotDateTimeOriginal] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [displayTimeText, setDisplayTimeText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const { userState } = useSignInState();
  const [open, setOpen] = useState(false);
  const { updateSpots } = useSpotDataState();

  useEffect(() => {
    if(spotImageURL && spotArea && spotSeason && spotTime && spotWeather) {
      console.log("isComplete")
      setIsComplete(true);
    }
  });

  useEffect(() => {
    if(spotGPS) {
      console.log(spotGPS);
      setDisplayText(spotGPS.latitude + " " + spotGPS.longitude);
    }
    if(spotDateTimeOriginal) {
      console.log(spotDateTimeOriginal);
      setDisplayTimeText(spotDateTimeOriginal.toString())
    }
  }, [spotGPS, spotDateTimeOriginal])

  const uploadImage = async(event) => {
    const { _, files } = event.target;
    const render = new FileReader();
    render.onload = () => {
      setSpotImageURL(render.result.toString());
    }
    render.readAsDataURL(files[0]);

    const data = await loadImage(files[0], {
      maxWidth: 700,
      meta: true,
      canvas: true
    })

    data.image.toBlob((blob => {
      setSpotImageData(blob);
    }))

    const exifIFD = data.exif.get("Exif");
    const getTime = exifIFD.get("DateTimeOriginal").split(" ");
    const dateTime = getTime[0].replace(":", "/").replace(":", "/") + " " + getTime[1];
    const createDate = new Date(dateTime);
    setSpotDateTimeOriginal(createDate);

    const gpsInfo = data.exif.get("GPSInfo");
    const gpsLatitude = gpsInfo.get("GPSLatitude");
    const gpsLongitude = gpsInfo.get("GPSLongitude");
    const lat_60 = gpsLatitude[0] + "??" + gpsLatitude[1] + "'" + gpsLatitude[2] +  "\"" + gpsInfo.get('GPSLatitudeRef');
    const lng_60 = gpsLongitude[0] + "??" + gpsLongitude[1] + "'" + gpsLongitude[2] + "\"" + gpsInfo.get('GPSLongitudeRef');
    setSpotGPS({
      latitude: lat_60,
      longitude: lng_60
    })

    event.target.value = "";
  }
  const spotTitleHandleChange = (event) => {
    setSpotTitle(event.target.value);
  }

  const spotExplainHandleChange = (event) => {
    setSpotExplain(event.target.value);
  }

  const spotAreaHandleChange = (event) => {
    setSpotArea(event.target.value);
  }

  const spotSeasonHandleChange = (event) => {
    setSpotSeason(event.target.value);
  }

  const spotTimeHandleChange = (event) => {
    setSpotTime(event.target.value);
  }

  const spotWeatherHandleChange = (event) => {
    setSpotWeather(event.target.value);
  }

  const postSpot = () => {
    const createUUID = v4() + ".jpg";
    const nowTime = new Date();
    console.log(createUUID);

    uploadSpotImage(spotImageData, createUUID);
    postNewSpot(userState, spotTitle, spotExplain, spotArea, spotSeason, spotTime, spotWeather, createUUID, nowTime, spotGPS, spotDateTimeOriginal);
    setOpen(true);
    setSpotImageURL("");
    setSpotImageData("");
    setSpotTitle("");
    setSpotExplain("");
    setSpotArea("");
    setSpotSeason("");
    setSpotTime("");
    setSpotWeather("");
    setSpotGPS("");
    setSpotDateTimeOriginal("");
    setIsComplete(false);
    updateSpots();
  }

  const handleClose = () => {
      setOpen(false);
    }

  const ImageDisplay = () => {
    if(spotImageURL) {
      return (
        <Box sx={{m: 1, mt: 3}}>
          <Image src={spotImageURL} width={340} height={220} /> 
        </Box>
      );
    }else {
      return (
        <Skeleton variant="rectangular" width={340} height={220} sx={{m: 1, mt: 3}}/>
      );
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ImageDisplay />
        <label htmlFor="contained-button-file" id="upload">
            <Input
            id="contained-button-file"
            type="file"
            onChange={uploadImage}
            />
            <Button variant="contained" component="span">
            ???????????????
            </Button>
        </label>
        <Typography sx={{mt: 2}} variant="body2" component="div">
          {displayTimeText}
        </Typography>
        <Typography variant="body2" component="div">
          {displayText} 
        </Typography>

        <TextField  sx={{ m: 1, width: "300px" }}
                    id="standard-basic"
                    label="????????????"
                    defaultValue={spotTitle}
                    onBlur={spotTitleHandleChange}
                    variant="standard"
                    inputProps={{ maxLength: 30}}
        />
        <TextField  sx={{ m: 1, width: "300px" }}
                    id="standard-basic"
                    label="??????"
                    defaultValue={spotExplain}
                    onBlur={spotExplainHandleChange}
                    variant="standard"
                    multiline maxRows={4}
                    inputProps={{ maxLength: 95}}
        />
          <FormControl sx={{ m: 1, minWidth: 300 }} id="basho">
            <InputLabel htmlFor="grouped-basho-select">????????????</InputLabel>
            <Select
              defaultValue=""
              value={spotArea}
              onChange={spotAreaHandleChange}
              id="grouped-basho-select"
              label="Grouping"
            >
              
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"????????????"}>????????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"????????????"}>????????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
              <MenuItem value={"????????????"}>????????????</MenuItem>
              <MenuItem value={"?????????"}>?????????</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 300 }} id="kisetsu">
            <InputLabel htmlFor="grouped-kisetsu-select">??????</InputLabel>
            <Select
              defaultValue=""
              value={spotSeason}
              onChange={spotSeasonHandleChange}
              id="grouped-kisetsu-select"
              label="Grouping"
            >

              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 300 }} id="jikantai">
            <InputLabel htmlFor="grouped-jikantai-select">
              ?????????
            </InputLabel>
            <Select
              defaultValue=""
              value={spotTime}
              onChange={spotTimeHandleChange}
              id="grouped-jikantai-select"
              label="Grouping"
            >

              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
            </Select>
          </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} id="tenki">
            <InputLabel htmlFor="grouped-tenki-select">??????</InputLabel>
            <Select
              defaultValue=""
              value={spotWeather}
              onChange={spotWeatherHandleChange}
              id="grouped-tenki-select"
              label="Grouping"
            >
              
              <MenuItem value={"??????"}>??????</MenuItem>
              <MenuItem value={"??????"}>??????</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
              <MenuItem value={"???"}>???</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{mb: 3}} variant="contained" component="span" onClick={postSpot} disabled={!isComplete}>
            ??????
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="success" sx={{ mb: "55px" }}>
              ????????????
            </Alert>
          </Snackbar>
          </Box>
    </>
  );
}

export default Post;