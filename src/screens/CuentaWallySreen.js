import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";

export default function CuentaWallyScreen() {
    
    return (
        <SafeAreaView style={{
             justifyContent: 'center',
             alignItems: 'center',
        }}>

            <View style={{
                position: "absolute",
                top: 0,
                marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                height: 80,
                width: "100%",
            }} />

            <TitleComponent text="Elegir usuario Wally"/>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer_title: {
        fontSize: 30
    },

})