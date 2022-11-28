import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Transferencia from '../screens/Transferencia';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";
import ProfileScreen from '../screens/ProfileScreen';
import ChartScreen from '../screens/ChartScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { useNavigation } from '@react-navigation/native'
export default function UserNavigation() {
    // si el usuario ya inicio sesion se mostrara esta navegacion
    const navigation = useNavigation()

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#52A62D",
            tabBarInactiveTintColor: "#9CD919",
            tabBarActiveBackgroundColor: "#D4F194",
        }}>
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
            headerShown: false,
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen name='Transferencia' component={Transferencia} options={{
            headerShown: false,
            tabBarLabel: "Operaciones",
            tabBarIcon: ({ color, size }) => (
                <Icon name="dollar-sign" color={color} size={size} />
                )
            }}
            />

            <Tab.Screen name='ChartScreen' component={ChartScreen} options={{
                // tabBarInactiveTintColor: "#9CD919",
                headerShown: false,
                tabBarLabel: "Movimientos",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="chart-line" color={color} size={size} />
                    )
                }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{
                headerRight: ({ color, size }) => (
                    <Icon name="cog" color={color} size={30} onPress={() => navigation.navigate("SettingsScreen")} />
                ),
                tabBarLabel: "Perfil",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

