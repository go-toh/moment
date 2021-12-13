import { useSignInState } from '../contexts/SignInStateProvider';
import { Avatar } from '@mui/material';

function UserProf() {
    const { userState } = useSignInState();
    const avatarImg = userState.photoURL;
    return (
        <Avatar alt="Remy Sharp" src={ avatarImg } />
    )
}

export default UserProf;