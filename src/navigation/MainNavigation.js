import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                options={{ headerShown: false }} name='MainScreen' component={MainScreen} />
            <Stack.Screen options={{ headerShown: false }} name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})