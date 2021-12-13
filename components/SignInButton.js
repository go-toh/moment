import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useSignInState } from '../contexts/SignInStateProvider';

function SignInButton() {
    const router = useRouter();
    const { userState } = useSignInState();
    const isSignIn = userState.isSignIn;
    return <Button
                variant="contained"
                onClick={()=>router.push('/')}
                disabled={isSignIn}>
                Sign In
            </Button>;
  }
  
  export default SignInButton;