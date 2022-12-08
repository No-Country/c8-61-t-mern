import { Modal, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Header, Icon } from 'react-native-elements'
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
            <View style={{ display: "flex", alignItems: "center", marginTop: "40%" }}>
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
                <Text style={{ color: "gray", marginVertical: 20 }}>Límite:   <TextMask
                    value={auth.money}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '$',
                    }} /></Text>
                <TouchableOpacity onPress={() => {

                    setModalVisible(true)
                }}
                    style={styles.btnPrincipal} >
                    <Text style={styles.btnPrincipal_text}>Continuar</Text>
                </TouchableOpacity >
                {/* <ButtonComponent  styleType={"btnPrincipal"} text="Enviar" goTo={"TicketScreen"} params={{ amount, contact }} /> */}
            </View>
            <Modal

                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView2}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Revision</Text>
                        <View style={styles.modalContaint1}>
                            {/* <Image
                                source={require("../assets/Images/visalogo.png")}
                                style={styles.img2}
                            /> */}
                            <Text style={{ ...styles.modalText, color: "gray" }}>Tarjeta de debito preferida  </Text>

                            {/* <Icon name="chevron-right" size={20} style={{ color: "#52A62D", padding: 10 }}
                                onPress={() => {
                                    navigation.navigate("CardComponent")
                                }}
                            /> */}
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", }}>
                                <Image
                                    source={require("../assets/Images/visalogo.png")}
                                    style={styles.imgModal}
                                />
                                <TextMask
                                    style={{ ...styles.modalText, color: "gray", marginBottom: 0 }}
                                    value={auth.cards[2].number}
                                    type={'credit-card'}
                                    options={{
                                        issuer: 'visa-or-mastercard',
                                        obfuscated: true
                                    }} />
                            </View>
                        </View>
                        <View style={{ width: "100%",  display:"flex", height:"50%" }}>
                            <View style={{ alignItems: "center", borderBottomWidth: 1, padding: 10 }}>
                                <Text style={{ fontWeight: "700", fontSize: 16, color: "gray" }}>Cuenta destino:</Text>
                                <Text style={{ fontWeight: "700", fontSize: 16, }}>{contact.firstName} {contact.lastName}</Text>
                                <Text style={{ fontWeight: "700", fontSize: 16, color: "gray" }}>wallytag: {contact.id}</Text>
                            </View>
                            <Text style={{...styles.modalText, fontSize:24}}>Total        {amount}</Text>
                            <Text style={{ ...styles.modalText, color: "gray" }}>Entrega de la transferencia: Inmediata</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(false)
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

                                }
                                }>
                                <Text style={styles.textStyle}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        // top: -30,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: -180
    },
    centeredView2: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        height: Dimensions.get("window").height / 2,
    },
    modalView: {
        // marginHorizontal: 10,
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        // borderTopRightRadiusRadius: 20,
        height: Dimensions.get("window").height / 2,
        padding: 35,
        // justifyContent:"center",
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        //borderRadius: 20,
        padding: 20,
        elevation: 2,
        //alignItems: 'center',
        borderRadius: 41,
        // flex: 1,
        minHeight: 50,
        justifyContent: 'center',
        marginBottom: 20,
        maxHeight: 50,
        width: 164,
    },
    buttonOpen: {
        //backgroundColor: "#F194FF",
        backgroundColor: "#9CD919",
        borderRadius: 41,
        padding: 15,
    },
    buttonClose: {
        backgroundColor: "#9CD919",
        borderRadius: 41,
        padding: 15,
    },
    textStyle: {
        //color: "white",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
    },
    modalText: {
        marginBottom: 5,
        textAlign: "center",
        color: "#9CD919",
        fontSize: 18,
        fontStyle: 'bold'
    },
    img: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    imgModal: {
        width: 70,
        // height: 30,
        resizeMode: 'contain',
        // alignItems: 'left'
    },
    button: {
        // marginTop: 200,
    },
    input: {
        width: '70%',
        height: 40,
        textAlign: 'center'
    },
    modalContaint1: {
        // flexDirection: 'column',
        width: "100%",
        borderBottomWidth: 1,
        padding: 20,
        // marginBottom: 20
    }
})