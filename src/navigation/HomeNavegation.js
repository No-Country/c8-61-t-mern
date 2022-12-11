import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardsScreen from '../screens/CardsScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

export default function HomeNavegation() {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='CardsScreen' component={CardsScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})