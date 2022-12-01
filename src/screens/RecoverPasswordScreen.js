import { StyleSheet, Text, View, Dimensions, Image  } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import TitleComponent from '../components/TitleComponent'
import FormComponent from '../components/FormComponent'
import useValidationForms from '../hooks/useValidationForms'
import ButtonComponent from '../components/ButtonComponent'
export default function RecoverPasswordScreen() {
    const inputRef = React.useRef([])
    const {
        questionsRecoverPassword,
        authRecoverPassword,
    } = useValidationForms()
    const errorMessages = Object.entries(authRecoverPassword?.errors)
    return (
        <View style={styles.screenContainer}>
            <View style={styles.topBg} >
                <Image
                    source={require("../assets/Images/recuperar-4-imagen.png")}
                    style={{}}
                />
            </View>
            <View style={styles.itemsContainer}>

                <TitleComponent text="Recuperar contraseña" />
                <Text>Ingresa tu e-mail y te enviaremos instrucciones para poder recuperarla.</Text>
                {questionsRecoverPassword.map((question, index) =>
                    <FormComponent
                        text={question.text}
                        type={question.type}
                        key={index}
                        index={index}
                        inputRef={inputRef}
                        auth={authRecoverPassword}
                        errorMessage={errorMessages.map((typeError) => { return question.type === typeError[0] && typeError[1] }
                        )}
                    />
                )}
                <ButtonComponent styleType="btnPrincipal" text="Enviar" goTo="LoginScreen" auth={authRecoverPassword} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        // marginTop: Constants.statusBarHeight
    },
    topBg: {
        flex:1,
        justifyContent:"flex-end",
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: "#EBF3CE",
        maxHeight: 128 +  Constants.statusBarHeight,
        width: Dimensions.get("window").width,
    },
    itemsContainer: {
        flex: 1,
        width: "100%",
        maxHeight: 400,
        padding: "10%",
        justifyContent: "space-around",
        alignItems: "center",
        // borderWidth: 1
    }
})