import { Text } from 'react-native'
import React from 'react'

export default function TitleComponent({ text }) {
    return (
        <Text style={{
            fontSize: 24,
            marginVertical: 20,
            color: "#52A62D",
            fontWeight: "700",
            lineHeight:26
        }} >{text}</Text>
    )
}