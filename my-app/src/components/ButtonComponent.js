import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ButtonComponent({ styleType, text, goTo, auth }) {
    // "auth" se usa para botones de validacion de formularios y "goTo" para navegacio
    const navigation = useNavigation();
    return (
        <Pressable onPress={auth?.handleSubmit || (() => navigation.navigate(goTo))
        }
            style={styles[styleType]} >
            <Text style={styles[`${styleType}_text`]}>{text}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    btnPrincipal: {
        flex: 1,
        backgroundColor: "#9CD919",
        width: 164,
        maxHeight: 50,
        height: 50,
        borderRadius: 41,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnPrincipal_text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
        backgroundColor: "transparent"
    },
    btnSecndary: {
        padding: 5
    },
    btnSecndary_text: {
        color: "#5CB9F2",
        fontSize: 15,
    }
})