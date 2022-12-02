import React from 'react'
import Constants from 'expo-constants'
import TitleComponent from '../components/TitleComponent'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormLogin from '../components/forms/FormLogin'

export default function LoginScreen() {

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }} >
            <View style={styles.screenContainer}>
                <View style={styles.topBg} />
                <View style={styles.topCircle} >
                    <Image
                        source={require("../assets/Images/Login-2-Imagen.png")}
                        style={{}}
                    />
                </View>
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
        backgroundColor: "#EBF3CE",
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width,
    },
    topCircle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#D4F194",
        borderRadius: 500,
        height: Dimensions.get("window").width / 1.5,
        width: Dimensions.get("window").width / 1.5,
    },

})