import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CuentaWallyScreen from '../screens/CuentaWallySreen';
import CbuTransferScreen from '../screens/CbuTransferScreen';
import Transferencia from '../screens/Transferencia';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function TransferNavigation() {

    return (


        <Stack.Navigator screenOptions={{
            // headerShown: false,
        }}>
            <Stack.Screen name='TransferirDinero' component={Transferencia} options={{
                headerTitle: () => <Text style={{ color: "#52A62D", fontSize: 24, fontWeight: "700" }}>Transferir dinero</Text>,
                headerStyle: {
                    backgroundColor: "#D4F194",
                },
            }} />
            <Stack.Screen name='CuentaWallyScreen' component={CuentaWallyScreen} options={{
                headerTitle: () => <Text style={{ color: "#52A62D", fontSize: 24, fontWeight: "700" }}>Enviar dinero</Text>,
                headerStyle: {
                    backgroundColor: "#D4F194",
                },
            }} />
            <Stack.Screen name='CbuTransferScreen' component={CbuTransferScreen} options={{
                headerTitle: () => <Text style={{ color: "#52A62D", fontSize: 24, fontWeight: "700" }}>Enviar dinero</Text>,
                headerStyle: {
                    backgroundColor: "#D4F194",
                },
            }} />
        </Stack.Navigator>
    )
}

