import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import Constants from 'expo-constants'
import ButtonComponent from '../components/ButtonComponent'
import { TextMask } from 'react-native-masked-text'
import FunctionsHomeSection from '../components/FunctionsHomeSection'
import CardsHomeSection from '../components/CardsHomeSection'
import ActivityHomeSection from '../components/ActivityHomeSection'
export default function HomeScreen() {
    const { auth } = useAuth()
    return (
        <View  >
            <ScrollView contentContainerStyle={styles.screenContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.avatarIcon} ></View>
                    <View>
                        <Text style={styles.sectionTitle}>¡Hola! {auth.firstName + " " + auth.lastName}</Text>
                        <TextMask style={styles.mountHeader}
                            value={auth.money}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }} />
                    </View>
                </View>
                <FunctionsHomeSection />
                <CardsHomeSection />
                <View style={styles.carbonoNeutralContainer}>
                    <Text style={{ ...styles.carbonoNeutralText, width: 187 }}>wally team
                        trabajando para
                        carbono neutral
                        <ButtonComponent text={"conocer mas"} styleType="btnSecndary" />
                    </Text>
                    <View style={styles.carbonoNeutralContainer_Circle} >
                        <Text style={{ fontSize: 17 }}>Mes actual</Text>
                        <Text style={{ fontSize: 60, fontWeight: "100" }}>50</Text>
                    </View>
                </View>
                <ActivityHomeSection/>
            </ ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        paddingBottom: "20%",
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 110,
        width: "100%",
    },
    sectionTitle: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 18,
    },
    avatarIcon: {
        backgroundColor: "#000",
        height: 90,
        width: 90,
        borderRadius: 50
    },
    mountHeader: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 24,
    },

   
    carbonoNeutralContainer: {
        width: 430,
        height: 167,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#EBF3CE",
        padding: "7%",
    },
    
    carbonoNeutralText: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 24,
    },
    carbonoNeutralContainer_Circle: {
        borderRadius: 500,
        backgroundColor: "#D4F194",
        width: 170,
        height: 170,
        right: -10,
        top: 30,
        justifyContent: "center",
        alignItems: "center",
    },

})