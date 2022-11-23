import { Text } from 'react-native'
import React from 'react'

export default function TitleComponent({ text }) {
    return (
        <Text style={{
            fontSize: 24,
            margin: 20,
            color: "#52A62D",
            fontWeight: "bold"
        }} >{text}</Text>
    )
}