import { StyleSheet, View } from 'react-native'
import React from 'react'
import FormComponent from './FormComponent';
import ButtonComponent from './ButtonComponent';
import { Text } from 'react-native-elements';
import useValidationForms from '../hooks/useValidationForms';

export default function FormRegister() {
    const inputRef = React.useRef([])

    const {
        questionsRegister,
        authRegister,
    } = useValidationForms()
    const errorMessages = Object.entries(authRegister.errors)

    return (
        <View style={styles.componentContainer} >
            <View style={styles.formContainer} >
                {questionsRegister.map((question, index) =>
                    <FormComponent
                        text={question.text}
                        type={question.type}
                        key={index}
                        index={index}
                        inputRef={inputRef}
                        auth={authRegister}
                    />
                )}
            </View>
            <View style={
                {
                    flex: 1,
                    alignItems: "center",
                    marginBottom: 10,
                }
            } >
                {errorMessages.map((typeError) =>
                    <Text key={typeError[0]} style={styles.errorMessage_text} >
                        {typeError[1]}
                    </Text>
                )}
            </View >
            <View style={styles.btnsContainer}>
                <ButtonComponent styleType={"btnPrincipal"} text="Crear cuenta" auth={authRegister} />
                <ButtonComponent styleType={"btnSecndary"} text="¿Ya tienes una cuenta?" goTo="LoginScreen" />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        width: "100%",
        marginTop: 40,
    },
    formContainer: {
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        // flex: 1,
        justifyContent: "space-between",
        // height: "auto",
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