import Button from '@mui/material/Button';
import { getAuth, signOut } from "firebase/auth";

function firebaseSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out");
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}

function SignOutButton( {loginState} ) {
  return <Button 
            variant="contained"
            onClick={firebaseSignOut}
            disabled={!loginState}>
            Sign Out
        </Button>;
}

export default SignOutButton;