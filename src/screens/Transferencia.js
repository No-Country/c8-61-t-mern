import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Transferencia() {
    const navigation = navigation()

    return (
        <SafeAreaView style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{
                position: "absolute",
                top: 0,
                marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                height: 80,
                width: "100%",
            }} />

            <TitleComponent text="Transferir dinero" />

            <View style={style.menu}>
                <Icon name="wallet-outline" size={20} style={{ left: 0, position: "absolute", padding: 15 }} />
                <Text style={styles.texto}>A otra cuenta Wally</Text>
            </View>
            <Icon name="chevron-right" size={20} style={{ right: -15, position: "absolute", padding: 15 }}
                onPress={() => {
                    navigation.navigate("CuentaWallyScreen")
                }} />

            <View style={styles.menu}>
                <Icon name="wallet-outline" size={20} style={{ left: 0, position: "absolute", padding: 15 }} />
                <Text style={styles.texto}>A un CBU</Text>
            </View>
            <Icon name="chevron-right" size={20} style={{ right: 0, position: "absolute", padding: 15 }}
                onPress={() => {
                    navigation.navigate("CbuTransferScreen")
                }} />



        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    screenContainer_title: {
        fontSize: 30
    },
    screenContainer_content: {
        flex: 1,
        justifyContent: "center"
    },
    menu: {
        textAlign: "left"
    },
})