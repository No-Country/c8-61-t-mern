import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function RegisterScreen({ navigation }) {

    return (
        <View>
            <Text>RegisterScreen</Text>
            <TextInput placeholder='nombre de usuario' ></TextInput>
            <TextInput placeholder='email' ></TextInput>
            <TextInput placeholder='contraseña' secureTextEntry={true} ></TextInput>
            <Button title='Registrar' />
            <Button title='¿Ya tienes una cuenta?' onPress={() => navigation.navigate('LoginScreen')} />
        </View>
    )
}

const styles = StyleSheet.create({})