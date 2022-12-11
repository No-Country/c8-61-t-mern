import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MainScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 30
        }} >
            <Text style={{
                fontSize: 30
            }} >Hola somos Wally</Text>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20
                }} >¿Ya tienes una cuenta?</Text>
                <Button title='iniciar sesíon' onPress={() => navigation.navigate('LoginScreen')} />
                <Text>o</Text>
                <Button title='Crear cuenta' onPress={() => navigation.navigate('RegisterScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})