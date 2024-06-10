import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login, logout } from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user);
        }
    }, []);

    const loginUser = async (username, password) => {
        const user = await login(username, password);
        setUser(user);
        router.push('/');
    };

    const logoutUser = () => {
        logout();
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
