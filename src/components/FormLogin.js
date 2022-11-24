import { StyleSheet, View } from 'react-native'
import React from 'react'
import FormComponent from './FormComponent'
import ButtonComponent from './ButtonComponent'
import { Text } from 'react-native-elements'
import useValidationForms from '../hooks/useValidationForms'

export default function FormLogin() {
    const inputRef = React.useRef([])
    const {
        questionsLogin,
        authLogin,
    } = useValidationForms()
    const errorMessages = Object.entries(authLogin?.errors)
    console.log(errorMessages);
    return (
        <View style={styles.componentContainer}>
            <View style={styles.formContainer} >
                {questionsLogin.map((question, index) =>
                    <FormComponent
                        text={question.text}
                        type={question.type}
                        key={index}
                        index={index}
                        inputRef={inputRef}
                        auth={authLogin}
                        errorMessage={errorMessages.map((typeError) => { return question.type === typeError[0] && typeError[1] }
                        )}
                    />
                )}
            </View>

            <View style={styles.btnsContainer}>
                <ButtonComponent
                    styleType={"btnPrincipal"}
                    text="Iniciar sesíon" auth={authLogin} />
                <ButtonComponent
                    styleType={"btnSecndary"}
                    text="¿No tienes cuenta?" goTo="RegisterScreen" />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        width: "100%",
        marginTop: 40,
    },
    formContainer: {
        flex: 1,
        justifyContent: "space-around",
        height: "auto",
    },
    btnsContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 20,
    },
    errorMessage_container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 10,
    },
    errorMessage_text: {
        color: "rgb(255,138,117)",
        padding: 10,
        margin: 5,
        borderRadius: 15
    }
})