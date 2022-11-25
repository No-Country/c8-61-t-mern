import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(false);

    const login = (userData) => {
        setAuth(userData);
    };

    const logout = () => {
        setAuth(undefined);
    };
    return (
        <AuthContext.Provider value={
            {
                auth,
                login,
                logout,
            }
        }>{children}</AuthContext.Provider>
    );
}