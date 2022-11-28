import React from 'react'
import useAuth from '../hooks/useAuth';
import UserNavigation from './UserNavigation';
import InitialNavigation from './InitialNavigation';

export default function IsLoginNavigation() {
    // si el login se valida correctamente la navegacion cambia 
    const { auth } = useAuth()
    return (
        <>
            {
                /* omitimos el inicio de sesión temporalmente,
                para habilitarlo cambiar el valor de auth en src\context\AuthContext.js*/
                !auth ?
                    <InitialNavigation />
                    :
                    <UserNavigation />
            }

        </>
    )
}