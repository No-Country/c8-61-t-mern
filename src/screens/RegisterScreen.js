import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BottonComponent from '../components/BottonComponent'
import FormComponent from '../components/FormComponent'
import TitleComponent from '../components/TitleComponent'

export default function RegisterScreen({ navigation }) {

    return (
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
        }}>
            <TitleComponent text="Registrarse con correo electrónico" />
            <FormComponent type="nombre" />
            <FormComponent type="apellido" />
            <FormComponent type="nombre de usuario" />
            <FormComponent type="email" />
            <FormComponent type="Contraseña" />
            <FormComponent type="Repetir contraseña" />
            <BottonComponent styleType={"btnPrincipal"} text="Crear cuenta" />
            <BottonComponent styleType={"btnSecndary"} text="¿Ya tienes una cuenta?" />

        </View>
    )
}

const styles = StyleSheet.create({})