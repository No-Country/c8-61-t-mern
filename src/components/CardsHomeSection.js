import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextMask } from 'react-native-masked-text'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import CardComponent from './CardComponent';
export default function CardsHomeSection() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    const showCards = (index, card) => {
        const LeftOfCards = parseInt(`${index * 7}0`)
        const ColorOfCards = [
            "#3295D1", "#FF603D"
        ]
        return (
            index < 2 &&
            <View key={index} style={{ ...styles.cardItem, right: LeftOfCards, zIndex: index, backgroundColor: ColorOfCards[index] }} >
                <TextMask style={styles.cardNumber}
                    value={card.number}
                    type={'credit-card'}
                    options={{
                        issuer: 'visa-or-mastercard',
                        obfuscated: true
                    }} />
            </View>
        )
    }
    return (
        <View style={styles.cardsContainer}>
            <Text style={{ ...styles.sectionTitle, textAlign: "center" }}>Mis Cards</Text>
            {auth.cards.map((card, index) => showCards(index, card))}

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
        // zIndex: 1,
        marginRight: "5%",
        paddingBottom: 10
    },
    cardNumber: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 4
    },
})