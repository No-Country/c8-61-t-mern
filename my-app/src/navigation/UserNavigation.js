import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Transferencia from '../screens/Transferencia';

const Stack = createNativeStackNavigator();

export default function UserNavigation() {
    // si el usuario ya inicio sesion se mostrara esta navegacion

    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='HomeScreen' component={HomeScreen} />
            <Stack.Screen options={{
                headerShown: false
            }} name='Transferencia' component={Transferencia} />
        </Stack.Navigator>
    )
}

