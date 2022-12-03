import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProfileScreen from '../screens/ProfileScreen';
import Icon from "react-native-vector-icons/FontAwesome5";
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsNavigation from './SettingsNavigations';
import { Image } from 'react-native-elements';
import TitleComponent from '../components/TitleComponent';

const Stack = createNativeStackNavigator();
export default function ProfileNavigation() {
    return (
        <Stack.Navigator screenOptions={{
        }}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{
                headerTitle: () => <TitleComponent text="Mi perfil" />,
                headerStyle: {
                    backgroundColor: "#D4F194",

                },
                headerRight: () => (
                    <Image
                        source={require("../assets/Images/Perfil-12-Imagen.png")}
                        style={{ width: 130, height: 110, }}
                    />
                ),
            }} />
            <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{
                title: "",
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})