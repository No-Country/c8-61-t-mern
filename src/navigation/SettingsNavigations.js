import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProfileScreen from '../screens/ProfileScreen';
import Icon from "react-native-vector-icons/FontAwesome5";
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function SettingsNavigation() {
    const navigation = useNavigation()

    return (
        <Tab.Navigator>
            <Tab.Screen name='SettingsScreen' component={SettingsScreen} options={{
                title: "",
            }} />

        </Tab.Navigator>
    )
}