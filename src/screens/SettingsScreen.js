import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SettingsScreen() {
    return (

        <KeyboardAwareScrollView style={{ flex: 1 }} >
            <View style={styles.screenContainer}>
                <View style={styles.topBg} >
                    <Text style={styles.title}>Configuración</Text>
                    <Image
                        source={require("../../assets/images/Configuración-13-imagen.png")}
                        style={{}}
                    />
                </View>
                {/* <TitleComponent text="Registrarse con correo electrónico" />
                <FormRegister /> */}
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