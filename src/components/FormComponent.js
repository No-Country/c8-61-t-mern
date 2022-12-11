import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function FormComponent(props) {
    const { type } = props
    return (
        <>
            <View style={styles.input_container} >
                <Text style={styles.input_label}>
                    {type}
                </Text>
                <TextInput   secureTextEntry={type === "Contraseña" || type === "Repetir contraseña"? true : false} style={styles.input} placeholder={type} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input_container: {
        width: "100%",

    },
    input_label: {
        color: "#52A62D",
        fontSize: 17
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#C6C6C8",
        fontSize: 17
    },
})