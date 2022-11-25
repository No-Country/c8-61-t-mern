import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";

export default function Transferencia() {

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{
                position: "absolute",
                top: 0,
                marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                height: 100,
                width: "100%",
            }} />

            <TitleComponent text="Transferencia" />
            <View style={styles.title}>
                <TextInput
                    placeholder="CBU destino"
                    style={styles.input}
                    autoCapitalize="none"
                //deberia ser un input que te lleve al listado ya cargado de cbu?
                />
                <ButtonComponent styleType={"btnSecndary"} text="Ingresar nuevo CBU" />
                <TextInput
                    placeholder="Monto"
                    style={styles.input}
                    autoCapitalize="none"
                />
                <ButtonComponent styleType={"btnPrincipal"} text="Transferir" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        width: "80%",
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }
});