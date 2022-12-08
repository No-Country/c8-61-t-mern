import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header, Icon, Image } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import TitleComponent from '../components/TitleComponent'
import { MaskedTextInput } from 'react-native-mask-text'
import ButtonComponent from '../components/ButtonComponent'
import useAuth from '../hooks/useAuth'
import { TextMask, MaskService } from 'react-native-masked-text'


// const goBack = () => {
//     return (
//         <Icon name='arrow-back' color='#52A62D' size={35} onPress={() => navigate.goBack()} />
//     )
// }

export default function SelectAmountScreen({ route }) {
    // const route =useRoute()
    const navigation = useNavigation()
    const { contact } = route.params
    const [amount, setAmount] = React.useState()
    const { auth } = useAuth()
    // navigate.setOptions({
    //     Headers:{

    //     }
    //     title: () => <Text> contacto</Text>
    // })
    return (
        <View>
            <View style={{
                // position: "absolute",
                // top: 0,
                // marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                // height: 80,
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 100,
                // paddingBottom: 50,
                zIndex: 0

            }} >
                <TitleComponent text={contact.firstName + " " + contact.lastName} />
                <Image
                    source={require("../assets/Images/Transferir-8-imagen.png")}
                    style={styles.img}
                />

                <TextInput style={styles.input}
                    placeholder="Ingresar monto"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.button}>
                <ButtonComponent styleType={"btnPrincipal"} text="Enviar" />
            </View>
            <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
                <Text style={{
                    fontSize: 18
                }}>Ingresar  monto</Text>
                <MaskedTextInput
                    type="currency"
                    options={{
                        prefix: '$',
                        decimalSeparator: '.',
                        groupSeparator: ',',
                        precision: 2
                    }}
                    // value={amount}
                    onChangeText={(text, rawText) => {
                        // console.log(text);
                        setAmount(text)
                    }}
                    style={{
                        color: "#52A62D",
                        fontSize: 46
                    }}
                    keyboardType="numeric"
                />
                <Text>Limite:   <TextMask
                    value={auth.money}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '$',
                    }} /></Text>
                <TouchableOpacity onPress={() => {
                    const moneyMask = MaskService.toMask('money', auth.money, {
                        unit: '$',
                        separator: '.',
                        delimiter: ','
                    })
                    const amountClear = amount.slice(1).replace(",", "")
                    const moneyClear = moneyMask.slice(1).replace(",", "")
                    const amountNumber = parseFloat(amountClear)
                    const moneyNumber = parseFloat(moneyClear)
                    auth.money = moneyNumber - amountNumber
                    // // console.log(auth.money)
                    // // console.log(Number(amountClear) + 1)
                    // console.log(amountNumber)
                    // console.log(moneyNumber + 1)
                    navigation.navigate("TicketScreen", { amount, contact })
                }}
                    style={styles.btnPrincipal} >
                    <Text style={styles.btnPrincipal_text}>Enviar</Text>
                </TouchableOpacity >
                {/* <ButtonComponent  styleType={"btnPrincipal"} text="Enviar" goTo={"TicketScreen"} params={{ amount, contact }} /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        // position:"absolute",
        top: -10,
        // left: 10,
        // zIndex: 11,
        // width: Dimensions.get("window").width / 1.4,
        // height: Dimensions.get("window").width / 1.4,
        width: 150,
        //  backgroundColor: "#D4F194",
        height: 150,
        // resizeMode: 'contain'
    },
    btnPrincipal: {
        alignItems: 'center',
        backgroundColor: "#9CD919",
        borderRadius: 41,
        flex: 1,
        minHeight: 50,
        justifyContent: 'center',
        marginBottom: 20,
        maxHeight: 50,
        width: 164,
    },
    btnPrincipalBlue: {
        alignItems: 'center',
        backgroundColor: "#5CB9F2",
        borderRadius: 41,
        flex: 1,
        height: 50,
        minHeight: 50,
        justifyContent: 'center',
        marginBottom: 20,
        maxHeight: 50,
        width: 164,
    },
    btnPrincipal_text: {
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    btnPrincipalBlue_text: {
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    btnSecndary: {
        padding: 5
    },
    btnSecndary_text: {
        color: "#5CB9F2",
        fontSize: 15,
    }
})