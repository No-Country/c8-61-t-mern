import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth';
import { mask, unMask } from 'react-native-mask-text';
import { MaskService, TextMask } from 'react-native-masked-text'
import ButtonComponent from '../components/ButtonComponent';
import { Image } from 'react-native-elements';

export default function TicketScreen({ route }) {
    const { auth, setTransfer } = useAuth()
    // const { params } = route.params
    const { amount, contact } = route.params
    const amountClear = amount.slice(1)
    const amountNumber = parseFloat(amountClear)
    const amountUnMask = unMask(amount)
    const userMoney = mask(auth.money, undefined, 'money', {
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: '$',
    })

    const money = MaskService.toMask('money', auth.money, {
        unit: '$',
        separator: '.',
        delimiter: ',',
        precision: 2,
    })
    const fecha = new Date()
    const fechaCompleta = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} | ${fecha.getHours()}:${fecha.getMinutes()}`
    return (
        <View>
            <ScrollView contentContainerStyle={{
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                paddingTop: "10%",
                paddingBottom: "30%",
                // height:"100%"
            }}>
                <View style={{ width: "80%", borderWidth: 1, borderRadius: 10, padding: 10, height: "35%", backgroundColor: "#fff" }}>
                    <View style={{ borderBottomWidth: 1, padding: 10 }}>
                        <Text style={{ fontWeight: "700", fontSize: 18 }}>{fechaCompleta} </Text>
                        <Text style={{ fontWeight: "700", color: "gray", fontSize: 18 }}>Comprobante de transferencia</Text>
                        <Text style={{ fontWeight: "700", color: "gray", fontSize: 18 }}>Numero de operacion: 7468780194</Text>
                    </View>
                    <View style={{}}>
                        <TextMask
                            style={{
                                color: "#52A62D",
                                fontSize: 46,
                                fontWeight: "700",
                                textAlign: "center",
                            }}
                            value={amount}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                                suffixUnit: ''
                            }}
                        />
                    </View>
                    <View style={{ display: "flex", alignItems: "center" }}>
                        <View style={{ width: "100%", paddingVertical: 20 }}>
                            <Text style={{ fontSize: 16, color: "gray" }}>De:</Text>
                            <Text style={{ fontSize: 16, }}>{auth.firstName} {auth.firstName}</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}>wallytag: {auth.id}</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}>A:</Text>
                            <Text style={{ fontSize: 16, }}>{contact.firstName} {contact.firstName}</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}>wallytag: {contact.id}</Text>
                        </View>
                        <ButtonComponent text={"Compartir"} styleType="btnPrincipal" />
                    </View>
                </View>
                <View style={styles.carbonoNeutralContainer}>
                    <Text style={{ ...styles.carbonoNeutralText, width: 187 }}>
                        ¡Felicidades! Tu operacion suma:
                    </Text>
                    <View style={styles.carbonoNeutralContainer_Circle} >
                        <Text style={{ fontSize: 60, fontWeight: "100" }}>12</Text>
                        <Text style={{ fontSize: 17 }}>Puntos</Text>
                    </View>
                </View>
                <View style={{ display: "flex", alignItems: "flex-start", width: "100%", paddingHorizontal: "10%" }}>
                    <Text style={{ fontWeight: "700", color: "#52A62D", fontSize: 18, marginLeft: 30 }}>Mis Puntos</Text>
                    <View style={{
                        borderRadius: 500,
                        backgroundColor: "#5CB9F2",
                        width: 150,
                        height: 150,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                        borderColor: "#3295D1",
                        borderWidth: 10
                    }} >
                        <Text style={{ fontSize: 60, fontWeight: "100" }}>83</Text>
                        <Text style={{ fontSize: 17 }}>Puntos</Text>
                    </View>
                    <View style={{
                        position: "absolute",
                        left: "45%",
                        top: "7%",
                        borderRadius: 500,
                        backgroundColor: "#EBF3CE",
                        width: 240,
                        height: 240,
                        justifyContent: "center",
                        alignItems: "center",
                    }} >
                        <Text style={{ fontSize: 40, fontWeight: "100", width: "70%", textAlign: "center" }}>Modo semilla</Text>
                        <Image
                            source={require("../assets/Images/semilla.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={{ marginTop: 120, width: "100%", display: "flex", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "740", width: "70%", textAlign: "center", color: "gray" }}>Estás en <Text style={{ fontWeight: "700", color: "#000" }}>Modo semilla</Text></Text>
                        <Text style={{ fontSize: 20, fontWeight: "740", width: "70%", textAlign: "center", color: "gray" }}>faltan  <Text style={{ fontWeight: "700", color: "#000" }}>17 puntos</Text> </Text>
                        <Text style={{ fontSize: 20, fontWeight: "740", width: "75%", textAlign: "center", color: "gray", marginBottom: 30 }}>para plantar tu <Text style={{ fontWeight: "700", color: "#000" }}>Primer árbol</Text></Text>
                        <ButtonComponent text={"Saber mas"} styleType="btnPrincipal" />
                        <ButtonComponent text={"Volver a inicio"} styleType="btnSecndary" goTo={"HomeScreen"} />
                        <TouchableOpacity
                            style={styles.btnSecndary} >
                            <Text style={styles.btnSecndary}>Volver a inicio</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    carbonoNeutralContainer: {
        // flex: 1,
        marginVertical: 50,
        width: 430,
        height: 160,
        // flexDirection: "row",
        backgroundColor: "#EBF3CE",
        display: "flex",
        justifyContent: "center",
        // alignContent:"center"
        paddingLeft: "10%",
    },

    carbonoNeutralText: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 24,
    },
    carbonoNeutralContainer_Circle: {
        position: "absolute",
        borderRadius: 500,
        backgroundColor: "#D4F194",
        width: 150,
        height: 150,
        right: 30,
        top: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        // position:"absolute",
        // top: -10,
        // left: 10,
        // zIndex: 11,
        // width: Dimensions.get("window").width / 1.4,
        // height: Dimensions.get("window").width / 1.4,
        width: 150,
        //  backgroundColor: "#D4F194",
        height: 100,
        resizeMode: 'contain'
    },
    btnSecndary: {
        padding: 5
    },
    btnSecndary_text: {
        color: "#5CB9F2",
        fontSize: 15,
    }
})