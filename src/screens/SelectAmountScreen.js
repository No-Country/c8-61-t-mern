import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header, Icon, Image } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import TitleComponent from '../components/TitleComponent'
import { MaskedTextInput } from 'react-native-mask-text'
import ButtonComponent from '../components/ButtonComponent'
import useAuth from '../hooks/useAuth'
import { TextMask, MaskService } from 'react-native-masked-text'



export default function SelectAmountScreen({ route }) {
    const [modalVisible, setModalVisible] = React.useState(false);

    const navigation = useNavigation()
    const { contact } = route.params
    const [amount, setAmount] = React.useState()
    const { auth } = useAuth()

    return (
        <View>
            <View style={{
                backgroundColor: "#EBF3CE",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 100,
                zIndex: 0

            }} >
                <TitleComponent text={contact.firstName + " " + contact.lastName} />
                <Image
                    source={require("../assets/Images/Transferir-8-imagen.png")}
                    style={styles.img}
                />
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
                    onChangeText={(text, rawText) => {
                        setAmount(text)
                    }}
                    style={{
                        color: "#52A62D",
                        fontSize: 46
                    }}
                    keyboardType="numeric"
                />
                <Text>Límite:   <TextMask
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
        top: -10,
        width: 150,
        height: 150,
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