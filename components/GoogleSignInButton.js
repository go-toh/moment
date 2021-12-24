import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { firebaseAuthSignInPopup } from '../src/firebaseAuth';

function GoogleSignInButton() {
    return (
        <Button onClick={ firebaseAuthSignInPopup } variant="outlined" startIcon={<GoogleIcon />}>Googleサインイン</Button>
    );
}

export default GoogleSignInButton;