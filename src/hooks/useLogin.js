import {getAuth, signOut} from 'firebase/auth';
import { useFirebase } from '../hooks/useFirebase';

const useLogin = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const { signInWithGoogle } = useFirebase();
    
    const handleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return { user, handleLogin, handleLogout };
};

export default useLogin;
