import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function LoginScreen() {

    return (
        <View>
            <Text>Inicia sesíon</Text>
            <TextInput  placeholder='nombre de usuario o  email' ></TextInput>
            <TextInput secureTextEntry={true}  placeholder='Ingresa contraseña' ></TextInput>
            <Button title='Iniciar sesíon' />
            <Button title='¿No recuerdas tu constraseña?' />
        </View>
    )
}

const styles = StyleSheet.create({})