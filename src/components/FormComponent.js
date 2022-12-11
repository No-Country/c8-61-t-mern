import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { MaskedTextInput } from "react-native-mask-text";
export default function FormComponent({ text, type, inputRef, index, auth, errorMessage }) {
    const [openKeyboard, setOpenKeyboard] = React.useState(false)
    const [returnKeyTypeChange, setReturnKeyTypeChange] = React.useState("next")
    const ref = React.useRef()
    // salto entre inputs //
    const isFocus = () => {
        if (!inputRef.current[index + 1]) {
            setOpenKeyboard(true)
            setReturnKeyTypeChange("done")
        }
    }

    const nextInput = (e) => {
        if (inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus()
        }
    }
    // ---- salto entre inputs ---- //

    const typeNumber = ["age", "dateBirth"]
    const typeMidScreen = ["firstName", "lastName", "age", "dateBirth"]
    React.useEffect(() => {
        if (typeMidScreen.includes(type)) {
            ref.current.setNativeProps({
                style: {
                    width: "50%",
                }
            })
        }
    }, [])

    return (
        <View ref={ref} style={styles.input_container} >
            {type === "dateBirth" || type === "age" ?
                <View style={{
                    marginHorizontal: 10,
                }}>
                    <Text style={styles.input_label} >{text}</Text>
                    <MaskedTextInput
                        mask={
                            type === "dateBirth" && "99/99/9999" ||
                            type === "age" && "99"
                        }
                        secureTextEntry={type === "password" ?? true}
                        onFocus={isFocus}
                        ref={(el) => (inputRef.current[index] = el)}
                        returnKeyType={returnKeyTypeChange}
                        blurOnSubmit={openKeyboard}
                        onSubmitEditing={nextInput}
                        value={auth?.values.type}
                        autoCapitalize='none'
                        style={styles.input}
                        placeholder={text}
                        keyboardType={typeNumber.includes(type) ? "number-pad" : "default"}
                        onChangeText={(text) => {
                            auth?.setFieldValue(type, text)
                        }}
                    />
                </View>
                :
                <Input
                    label={text}
                    errorMessage={errorMessage ? errorMessage : false}
                    errorStyle={styles.input_error}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    labelStyle={styles.input_label}
                    secureTextEntry={type === "password" ?? true}
                    onFocus={isFocus}
                    ref={(el) => (inputRef.current[index] = el)}
                    returnKeyType={returnKeyTypeChange}
                    blurOnSubmit={openKeyboard}
                    onSubmitEditing={nextInput}
                    value={auth?.values.type}
                    onChangeText={(text) => {
                        auth?.setFieldValue(type, text)
                    }}
                    autoCapitalize='none'
                    style={styles.input}
                    placeholder={text}
                    keyboardType={typeNumber.includes(type) ? "number-pad" : "default"}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input_container: {
        display: "flex",
        width: "100%",
        height: 100,
    },
    input_label: {
        color: "#52A62D",
        fontSize: 17,
        fontWeight: "bold",
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 17,
        paddingVertical: 5,
    },
    input_error: {
        color: "red",
        fontSize: 12
    },
})