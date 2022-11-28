import { Button, StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import ButtonComponent from '../components/ButtonComponent'

export default function InitialScreen() {
    // animation logo 

    const translateAnimationTiming = React.useRef(new Animated.Value(0)).current

    const timingAnimation = () => {
        Animated.timing(translateAnimationTiming, {
            toValue: -Dimensions.get("window").height / 10,
            duration: 600,
            useNativeDriver: true,
        }).start()
    }

    const animatedStyleTiming = {
        transform: [{ translateY: translateAnimationTiming }]
    }

    setTimeout(() => {
        timingAnimation()
    }, 1000)


    // animation buttons

    const translateAnimationTimingBtns = React.useRef(new Animated.Value(0)).current

    const timingAnimationBtns = () => {
        Animated.timing(translateAnimationTimingBtns, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start()
    }

    setTimeout(() => {
        timingAnimationBtns()
    }, 2000)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: Constants.statusBarHeight,
            paddingBottom: 20
        }} >
            <Animated.View style={[
                styles.bgCircle,
                animatedStyleTiming,
            ]}>
                <Image
                    source={require("../assets/Inicio1-Imagen.png")}
                    style={styles.img}
                />
            </Animated.View>
            <Animated.View style={{
                ...styles.btnsContainer,
                opacity: translateAnimationTimingBtns
            }}>
                <ButtonComponent styleType="btnPrincipal" text="Iniciar sesión" goTo="LoginScreen" />
                <ButtonComponent styleType="btnPrincipalBlue" text="Registrarse" goTo="RegisterScreen" />
            </Animated.View>
        </View >
    )
}

const styles = StyleSheet.create({
    bgCircle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D4F194",
        borderRadius: 500,
        minHeight: Dimensions.get("window").width * 1.1,
        maxHeight: Dimensions.get("window").width * 1.1,
        width: Dimensions.get("window").width * 1.1,
    },
    img: {
        width: Dimensions.get("window").width / 1.4,
        height: Dimensions.get("window").width / 1.4,
        resizeMode: 'contain',
    },

    btnsContainer: {
        alignItems: "center",

        flex: 1,
        maxHeight: "20%",
    },
})
