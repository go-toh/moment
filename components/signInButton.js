import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

function SignInButton({ loginState }) {
    const router = useRouter();
    return <Button
                variant="contained"
                onClick={()=>router.push('/')}
                disabled={loginState}>
                Sign In
            </Button>;
  }
  
  export default SignInButton;