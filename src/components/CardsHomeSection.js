import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextMask } from 'react-native-masked-text'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
export default function CardsHomeSection() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    return (
        <View style={styles.cardsContainer}>
            <Text style={{ ...styles.sectionTitle, textAlign: "center" }}> Mis Cards</Text>
            {auth.cards.forEach((card) =>
                <View style={{ ...styles.cardItem, right: 30, backgroundColor: "#3295D1", zIndex: 0 }} >
                    <TextMask style={styles.cardNumber}
                        value={card.number}
                        type={card.type}
                        options={{
                            issuer: 'visa-or-mastercard',
                            obfuscated: true
                        }} />
                </View>
            )}

            <Icon name="chevron-right" size={20} style={{ right: -15, position: "absolute", top: "36%", padding: 15 }} onPress={() => {
                navigation.navigate("CardsScreen")
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        height: 110,
        width: 348,
        marginTop: 77,
        marginBottom: 10,
    },
    sectionTitle: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 18,
    },
    cardItem: {
        position: "absolute",
        top: "30%",
        backgroundColor: "#FF603D",
        borderRadius: 8,
        width: 258,
        height: 68,
        justifyContent: "flex-end",
        paddingLeft: 20,
        zIndex: 1,
        paddingBottom: 10
    },
    cardNumber: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 4
    },
})