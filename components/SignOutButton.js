import { signOut } from "firebase/auth";
import { useSignInState } from "../contexts/SignInStateProvider";
import { auth } from "../src/firebaseConfig";
import Button from "@mui/material/Button";

function SignOutButton() {
    const { userState } = useSignInState();
    const isSignIn = userState;
    
    const firebaseSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out");
        }).catch((error) => {
            console.log(error);
        });
    }
    
    return (
        <Button 
            variant="contained"
            onClick={firebaseSignOut}
            disabled={!isSignIn}>
            Sign Out
        </Button>
    );
}

export default SignOutButton;