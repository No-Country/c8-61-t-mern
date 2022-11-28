import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    // para habilitar el login, cambiar auth de "true" a "undefined"
    const [auth, setAuth] = useState(true);
    // const [createccount, setCreateAccount] = useState(undefined);

    const login = (userData) => {
        setAuth(userData);
        console.log(auth);
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