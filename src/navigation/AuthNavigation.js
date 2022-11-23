import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    // navegacion principal, se elige entre iniciar sesion y registrarse
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name='MainScreen' component={AuthScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>

    )
}

