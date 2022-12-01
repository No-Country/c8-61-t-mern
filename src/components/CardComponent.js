import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import randomColor from 'randomcolor'
import { TextMask, MaskService } from 'react-native-masked-text'
// import { MaskService } from 'react-native-masked-text'
export default function CardComponent({ card, index }) {
    
    
    // { ...styles.cardItem, right: 30, backgroundColor: "#3295D1", zIndex: 0 }
    const LeftOfCards = parseInt(`${index  * 7}0`)
    
    console.log(index);
    return (
        <View style={{ ...styles.cardItem, right: LeftOfCards, zIndex: index, backgroundColor: ColorOfCards[index] }} >
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

const styles = StyleSheet.create({
  
})