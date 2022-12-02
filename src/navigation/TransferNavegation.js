import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CuentaWallyScreen from '../screens/CuentaWallySreen';
import CbuTransferScreen from '../screens/CbuTransferScreen';
import Transferencia from '../screens/Transferencia';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function TransferNavigation() {
 
    return (

       
        <Stack.Navigator screenOptions={{
            headerShower: false,
        }}>
            <Stack.Screen name='Transferir dinero' component={Transferencia} />
            <Stack.Screen name='CuentaWallyScreen' component={CuentaWallyScreen} />
            <Stack.Screen name='CbuTransferScreen' component={CbuTransferScreen} />
        </Stack.Navigator>
    )
}

