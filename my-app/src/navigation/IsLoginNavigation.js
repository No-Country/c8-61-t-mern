import React from 'react'
import useAuth from '../hooks/useAuth';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';

export default function IsLoginNavigation() {
    // si el login se valida correctamente la navegacion cambia 
    const { auth } = useAuth()
    return (
        <>
            {
                // omitimos el inicio de sesión temporalmente
                // !auth ?
                //     <AuthNavigation />
                //     :
                    <UserNavigation />
            }

        </>
    )
}