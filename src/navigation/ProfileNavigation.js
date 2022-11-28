import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Stack = createNativeStackNavigator();
export default function ProfileNavigation() {
    const navigation = useNavigation()

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#52A62D",
            tabBarInactiveTintColor: "#9CD919",
            tabBarActiveBackgroundColor: "#D4F194",
            // headerShown: false
        }}>
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})