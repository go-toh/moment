import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Button from '@mui/material/Button';
import initFirebase from '../src/firebaseConfig';

const clickButton = () => {
    
    initFirebase();

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(credential);
            console.log(token);
        }).catch((error) => {
        console.error(error)
        })
}

function GoogleLoginButton() {
    return (
        <Button onClick={clickButton} variant="outlined">Googleログイン</Button>
    );
}

export default GoogleLoginButton;