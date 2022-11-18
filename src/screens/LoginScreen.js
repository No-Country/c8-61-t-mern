import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BottonComponent from '../components/BottonComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import FormComponent from '../components/FormComponent'
import TitleComponent from '../components/TitleComponent'

export default function LoginScreen() {

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // paddingTop: 30,
            // borderWidth:1,
        }}>
            <View style={{
                position: "absolute",
                top: 0,
                marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                // borderRadius: 500,
                height: 100,
                width: "100%",
                // borderWidth:1,

            }} />
            <View style={{
                marginTop: 20,
                backgroundColor: "#D4F194",
                borderRadius: 500,
                height: 300,
                width: 300,
            }} />
            <TitleComponent text="Inicia sesíon" />
            <View style={{
                width: "80%",
                // borderWidth:1,
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                // paddingTop: 30
                // margin: "10%",
            }}>
                <FormComponent type="nombre de usuario o email" />
                <FormComponent type="Contraseña" />
                <BottonComponent styleType={"btnPrincipal"} text="Iniciar sesíon" />
                <BottonComponent styleType={"btnSecndary"} text="Recuperar contraseña" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})