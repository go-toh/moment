import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router';
import { useSignInState } from '../contexts/SignInStateProvider';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import initFirebase from '../src/firebaseConfig';

function GoogleSignInButton() {
    const router = useRouter();
    const { setUser } = useSignInState();
    const clickButton = () => {
        initFirebase();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = auth.currentUser;
                const userState = {
                    isSignIn: true,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }
                setUser(userState);
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