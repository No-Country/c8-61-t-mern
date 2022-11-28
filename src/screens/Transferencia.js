import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";

export default function Transferencia() {

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenContainer_title}>TransferScreen</Text>
            <View style={styles.screenContainer_content}>
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