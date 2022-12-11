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
import SettingsIcon from '../components/icons/SettingsIcon'
const Stack = createNativeStackNavigator();
export default function ProfileNavigation() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={{
        }}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{
                headerTitle: () => <TitleComponent text="Mi perfil" />,
                headerStyle: {
                    backgroundColor: "#D4F194",

                },
                headerRight: () => (
                    <SettingsIcon width={60} height={60} fill="#000" onPress={() => navigation.navigate("SettingsScreen")} />
                ),
            }} />
            <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{
                headerTitle: () => <Text style={{ color: "#FFFBF5", fontSize: 24, fontWeight: "700" }}>Configuración</Text>,
                headerStyle: {
                    backgroundColor: "#6CCCF2",
                },
                headerRight: () => (
                    <Image
                        source={require("../assets/Images/Configuración-13-imagen.png")}
                        style={{width:200, height:60, resizeMode:"cover"}}
                    />
                ),
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})