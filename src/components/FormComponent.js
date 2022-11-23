import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function FormComponent({ text, type, inputRef, index, auth }) {
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

    const typeMidScreen = ["firstName", "lastName", "age", "dateBirth"]
    React.useEffect(() => {
        if (typeMidScreen.includes(type)) {
            // console.log(ref.current.setNativeProps);
            // setIsShort(true)
            ref.current.setNativeProps({
                style:{
                width: '45%'
                }
                })
        }
    }, [])

    return (
        <View ref={ref} style={styles.input_container} >
            <Text style={styles.input_label}>
                {text}
            </Text>
            <TextInput
                secureTextEntry={type === "password" ?? true}
                onFocus={isFocus}
                ref={(el) => (inputRef.current[index] = el)}
                returnKeyType={returnKeyTypeChange}
                blurOnSubmit={openKeyboard}
                onSubmitEditing={nextInput}
                value={auth?.values.type}
                onChangeText={(textInput) => {
                    auth?.setFieldValue(type, textInput)
                }}
                autoCapitalize='none'
                style={styles.input}
                placeholder={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input_container: {
        width: "100%",
        height: 100,
    },
    input_label: {
        color: "#52A62D",
        fontSize: 17,
    },
    input: {
        fontSize: 17,
        borderBottomWidth: 1,
        paddingVertical: 5

    },
})