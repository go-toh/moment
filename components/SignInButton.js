import { useRouter } from "next/router";
import { useSignInState } from "../contexts/SignInStateProvider";
import Button from "@mui/material/Button";

function SignInButton() {
    const router = useRouter();
    const { userState } = useSignInState();
    const isSignIn = userState ? true : false;
    return (
        <Button
            variant="contained"
            onClick={()=>router.push("/")}
            disabled={ isSignIn }>
            Sign In
        </Button>
    );
}
  
  export default SignInButton;