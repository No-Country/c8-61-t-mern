import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleComponent(props) {
    const { text } = props
    return (
        <Text style={{
            fontSize: 24,
            marginTop: 20,
            color: "#52A62D",
            fontWeight: "bold"
        }} >{text}</Text>
    )
}