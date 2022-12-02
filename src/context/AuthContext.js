import React, { useState, createContext } from "react";
import UserProfile from '../utils/UserExample.json'
export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    // para habilitar el login, cambiar auth de "true" a "undefined"
    const [auth, setAuth] = useState(UserProfile);
    // const [createccount, setCreateAccount] = useState(undefined);
    function getData() {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
    const login = (userData) => {
        setAuth(true)
    };

    const logout = () => {
        setAuth(undefined);
    };

    const register = (userData) => {
        setAuth(userData);
        // console.log(createAccount); 
    };
    return (
        <AuthContext.Provider value={
            {
                auth,
                // createAccount,

                login,
                logout,
                register
            }
        }>{children}</AuthContext.Provider>
    );
}