import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements'

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
                    width: '50%'
                }
            })
        }
    }, [])

    return (
        <View ref={ref} style={styles.input_container} >
            <Input
                label={text}
                errorMessage={errorMessage ? errorMessage : false}
                errorStyle={styles.input_error}
                labelStyle={styles.input_label}
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
                keyboardType={typeNumber.includes(type) ? "number-pad" : "default"}
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
        fontWeight: "bold"
    },
    input: {
        fontSize: 17,
        paddingVertical: 7,

    },
    input_error: {
        color: "red",
        fontSize: 12
    },
})
/*
{type === "dateBirth" ?
                <View style={styles.input_date} >
                    <Text style={styles.input_label}>
                        {text}
                    </Text>
                    <TextInputMask
                        onFocus={isFocus}
                        ref={(el) => (inputRef.current[index] = el)}
                        onSubmitEditing={nextInput}
                        returnKeyType={returnKeyTypeChange}
                        blurOnSubmit={openKeyboard}
                        style={{
                            // paddingBottom: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "gray",
                            ...styles.input
                        }}
                        placeholder='DD/MM/AAAA'
                        keyboardType="number-pad"
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={auth?.values.type}
                        onChangeText={(textInput) => {
                            auth?.setFieldValue(type, textInput)
                        }}
                    />
                    {errorMessage && <Text style={styles.input_error}>{errorMessage}</Text>}
                </View>
                :
*/