import React from 'react'
import Constants from 'expo-constants'
import TitleComponent from '../components/TitleComponent'
import { StyleSheet, View, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormLogin from '../components/FormLogin'

export default function LoginScreen() {

    return (

        <KeyboardAwareScrollView style={{ flex: 1 }} >
            <View style={styles.screenContainer}>
                <View style={styles.topBg} />
                <View style={styles.topCircle} />
                <TitleComponent text="Iniciar sesión" />
                <FormLogin />
            </View >
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
    topBg: {
        position: "absolute",
        top: 0,
        backgroundColor: "#EBF3CE",
        height: 100,
        width: Dimensions.get("window").width,
    },
    topCircle: {
        backgroundColor: "#D4F194",
        borderRadius: 500,
        height: Dimensions.get("window").width / 1.5,
        width: Dimensions.get("window").width / 1.5,
    },

})