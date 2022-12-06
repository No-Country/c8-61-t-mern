import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";

export default function CbuTransferScreen() {

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

            <TitleComponent text="Elegir CBU"/>

            <View style={styles.title}>
                <TextInput
                    placeholder="CBU destino"
                    style={styles.input}
                    autoCapitalize="none"
                />
                <ButtonComponent styleType={"btnSecndary"} text="Ingresar nuevo CBU" />
             
                <ButtonComponent styleType={"btnPrincipal"} text="Seleccionar" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer_title: {
        fontSize: 30
    },
    screenContainer_content: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
      }
})