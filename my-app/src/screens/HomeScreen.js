import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import Constants from 'expo-constants'
import ButtonComponent from '../components/ButtonComponent'

export default function HomeScreen() {
    // pantalla temporal de Home
    const { auth } = useAuth()
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenContainer_title}>HomeScreen</Text>
            <View style={styles.screenContainer_content}>
                <Text>{auth.email}</Text>
                <ButtonComponent styleType="btnPrincipal" goTo="Transferencia" text="Transferencia" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight
    },
    screenContainer_title: {
        fontSize: 30
    },
    screenContainer_content: {
        flex: 1,
        justifyContent: "center"

    }
})