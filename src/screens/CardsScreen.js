import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { TextMask } from 'react-native-masked-text'
import useAuth from '../hooks/useAuth'
import ButtonComponent from '../components/ButtonComponent'
import CardComponent from '../components/CardComponent'

export default function CardsScreen() {
    const { auth } = useAuth()
    const visa = "#3295D1"

    const mastercard = "#FF603D"

    //  "#81600D"
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.avatarIcon} ></View>
                <View>
                    <Text style={styles.sectionTitle}>{auth.firstName + " " + auth.lastName}</Text>
                    <TextMask style={styles.mountHeader}
                        value={"10050"}
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: '$',
                        }} />
                </View>
            </View>
            <View style={styles.cardsContainer}>
                <Text style={{ ...styles.cardsTitle }}> Mis Cards</Text>
                {auth.cards?.map(({ type, number }, index) =>
                    <View key={index} style={{ ...styles.cardItem, backgroundColor: type === "visa" ? "#3295D1" : "#FF603D" }} >
                        <TextMask style={styles.cardNumber}
                            value={number}
                            type={'credit-card'}
                            options={{
                                issuer: 'visa-or-mastercard',
                                obfuscated: true
                            }} />
                    </View>
                )}
            </View>
            <View style={styles.btnsContainer} >
                <ButtonComponent styleType={"btnPrincipal"} text="Añadir targeta" />
                <ButtonComponent styleType={"btnSecndary"} text="Eliminar targeta" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingBottom: "20%",
        paddingTop: Constants.statusBarHeight,
        height: "100%"
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        maxHeight: 130,
        width: "100%",
        backgroundColor: "#52A62D",
        paddingHorizontal: "10%"
    },
    sectionTitle: {
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 18,
    },
    avatarIcon: {
        marginRight: "10%",
        backgroundColor: "#000",
        height: 90,
        width: 90,
        borderRadius: 50
    },
    mountHeader: {
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 24,
    },
    cardsContainer: {
        // height: 200,
        marginTop: 77,
        marginBottom: 10,
        // borderWidth:1,
        // alignItems:"",

    },
    cardsTitle: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 18,
        textAlign: "center"
    },
    cardItem: {
        // position: "absolute",
        // top: "30%",
        borderRadius: 8,
        width: 258,
        height: 68,
        justifyContent: "flex-end",
        paddingLeft: 20,
        // zIndex: 1,
        paddingBottom: 10,
        marginVertical: 10,
    },
    cardNumber: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 4
    },
    btnsContainer: {
        // flex:1,
        alignItems: "center",
        // borderWidth:1
    }
})