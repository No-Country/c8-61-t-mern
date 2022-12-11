import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BottonComponent(props) {
    const { styleType, text, goTo } = props
    return (
        <Pressable style={styles[styleType]} >
            <Text style={styles[`${styleType}_text`]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnPrincipal: {
        flex: 1,
        backgroundColor: "#9CD919",
        width: 164,
        maxHeight: 50,
        borderRadius: 41,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 10,
        // paddingHorizontal: 30,
    },
    btnPrincipal_text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17,
    },
    btnSecndary: {
        // borderColor: "black",
        // borderWidth: 1,
        padding: 5
    },
    btnSecndary_text: {
        color: "#5CB9F2",
        fontSize: 15,
    }
})