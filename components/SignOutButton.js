import Button from '@mui/material/Button';
import { getAuth, signOut } from "firebase/auth";
import { useSignInState } from '../contexts/SignInStateProvider';

function SignOutButton() {
    const { userState, setSignOutState, setInitUser } = useSignInState();
    const isSignIn = userState.isSignIn;
    const firebaseSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignOutState();
            setInitUser();
            console.log("sign out");
        }).catch((error) => {
            console.log(error);
        });
    }
    
  return <Button 
            variant="contained"
            onClick={firebaseSignOut}
            disabled={!isSignIn}>
            Sign Out
        </Button>;
}

export default SignOutButton;