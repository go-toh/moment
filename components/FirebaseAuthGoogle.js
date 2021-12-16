import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router';
import { auth } from '../src/firebaseConfig';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

function GoogleSignInButton() {
    const router = useRouter();
    const clickButton = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                router.push('/home');
            }).catch((error) => {
                console.error(error)
            })
    }

    return (
        <Button onClick={clickButton} variant="outlined" startIcon={<GoogleIcon />}>Googleサインイン</Button>
    );
}

export default GoogleSignInButton;