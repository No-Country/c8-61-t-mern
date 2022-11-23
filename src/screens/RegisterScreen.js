import { StyleSheet, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import TitleComponent from '../components/TitleComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormRegister from '../components/FormRegister'

export default function RegisterScreen() {

    return (

        <KeyboardAwareScrollView style={{ flex: 1 }} >
            <View style={styles.screenContainer}>
                <TitleComponent text="Registrarse con correo electrónico" />
                <FormRegister />
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: "10%",
    },
})