import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChartScreen from '../screens/ChartScreen';
import TransferNavigation from './TransferNavegation';
import HomeNavegation from './HomeNavegation';
import ProfileNavigation from './ProfileNavigation';
import HomeIcon from '../components/icons/HomeIcon/'
import OperationsIcon from '../components/icons/OperationsIcon'
import MovementsIcon from '../components/icons/MovementsIcon'
import ProfileIcon from '../components/icons/ProfileIcon'
const Tab = createBottomTabNavigator();
export default function UserNavigation() {
    // si el usuario ya inicio sesion se mostrara esta navegacion

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#52A62D",
                tabBarInactiveTintColor: "#9CD919",
                tabBarActiveBackgroundColor: "#D4F194",

            }}>
            <Tab.Screen name='HomeNavegation' component={HomeNavegation} options={{
                headerShown: false,
                tabBarLabel: "Inicio",
                tabBarIcon: () => (
                    <HomeIcon />
                )
            }}
            />
            <Tab.Screen name='Transferencia' component={TransferNavigation} options={{
                headerShown: false,
                tabBarLabel: "Operaciones",
                tabBarIcon: () => (
                    <OperationsIcon />
                )
            }}
            />

            <Tab.Screen name='ChartScreen' component={ChartScreen} options={{
                // tabBarInactiveTintColor: "#9CD919",
                headerShown: false,
                tabBarLabel: "Movimientos",
                tabBarIcon: () => (
                    <MovementsIcon />
                )
            }} />
            <Tab.Screen
                name='ProfileNavigation' component={ProfileNavigation} options={{
                    headerShown: false,
                    tabBarLabel: "Perfil",
                    tabBarIcon: () => (
                        <ProfileIcon />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}

