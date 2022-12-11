import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ButtonComponent({ styleType, text, goTo, auth, params }) {
    // "auth" se usa para botones de validacion de formularios y "goTo" para navegacio
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={auth?.handleSubmit || (() => navigation.navigate(goTo, {params}))
        }
            style={styles[styleType]} >
            <Text style={styles[`${styleType}_text`]}>{text}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    btnPrincipal: {
        alignItems: 'center',
        backgroundColor: "#9CD919",
        borderRadius: 41,
        flex: 1,
        minHeight: 50,
        justifyContent: 'center',
        marginBottom: 20,
        maxHeight: 50,
        width: 164,
    },
    btnPrincipalBlue: {
        alignItems: 'center',
        backgroundColor: "#5CB9F2",
        borderRadius: 41,
        flex: 1,
        height: 50,
        minHeight: 50,
        justifyContent: 'center',
        marginBottom: 20,
        maxHeight: 50,
        width: 164,
    },
    btnPrincipal_text: {
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    btnPrincipalBlue_text: {
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    btnSecndary: {
        padding: 5
    },
    btnSecndary_text: {
        color: "#5CB9F2",
        fontSize: 15,
    }
})