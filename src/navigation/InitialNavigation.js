import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import InitialScreen from '../screens/InitialScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    // navegacion principal, se elige entre iniciar sesion y registrarse
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name='InitialScreen' component={InitialScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RecoverPasswordScreen' component={RecoverPasswordScreen} />
        </Stack.Navigator>

    )
}

