import { StyleSheet, View, Dimensions, Text } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import TitleComponent from '../components/TitleComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormRegister from '../components/FormRegister'

export default function RegisterScreen() {

    return (

        <KeyboardAwareScrollView style={{ flex: 1 }} >
            <View style={styles.screenContainer}>
                <View style={styles.topBg} >
                    <Text style={styles.title}>¡Hola! somos </Text>
                    <Text style={{
                        ...styles.title,
                        ...styles.title_wally
                    }} >Wally</Text>
                </View>
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
        // paddingTop: Constants.statusBarHeight,
        paddingHorizontal: "5%",
    },
    topBg: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6CCCF2",
        height: Dimensions.get("window").height / 6,
        width: Dimensions.get("window").width,
    },
    title: {
        color: "#FFFBF5",
        fontWeight: "700",
        fontSize: 24,
    },
    title_wally: {
        fontSize: 38,

    }
})