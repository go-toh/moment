import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import { uploadSpotImage } from '../src/firebaseStorage';

const Input = styled("input")({
  display: "none"
});

const uploadImage = async(event) => {
  const { name, files } = event.target;
  uploadSpotImage(files[0]);
  event.target.value = '';
}

function Post() {
  return (
    <Box sx={{ display: 'flex', height:  700, justifyContent: 'center', alignItems: 'center'}}>
      <label htmlFor="contained-button-file" id="upload">
          <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={uploadImage}
          />
          <Button variant="contained" component="span">
          写真を選ぶ
          </Button>
      </label>
    </Box>
  );
}

export default Post;