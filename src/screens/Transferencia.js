import React from "react";
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import TitleComponent from "../components/TitleComponent";
// import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Transferencia() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{
                position: "absolute",
                top: 0,
                // marginTop: Constants.statusBarHeight,
                // backgroundColor: "#EBF3CE",
                height: 80,
                width: "100%",
            }} />

            {/* <TitleComponent text="Transferir dinero" /> */}

            <View style={styles.menu}>
                <Icon name="wallet" size={20} style={{ color:"#52A62D"}} />
                <Text style={styles.texto}>A otra cuenta Wally</Text>
                <Icon name="chevron-right" size={20} style={{ color:"#52A62D"}}
                    onPress={() => {
                        navigation.navigate("CuentaWallyScreen")
                    }} />
            </View>

            <View style={styles.menu}>
                <Icon name="money-bill" size={20} style={{ color:"#52A62D"}} />
                <Text style={styles.texto}>A un CBU</Text>
                <Icon name="chevron-right" size={20} style={{ color:"#52A62D"}}
                    onPress={() => {
                        navigation.navigate("CbuTransferScreen")
                    }} />
            </View>

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
        display: "flex",
        flexDirection: "row",
        // borderWidth: 1,
        width: "70%",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
        // textAlign: "left"
        borderBottomWidth:1
    },
    texto: {
        textAlign: "left",
        width: "80%",
        // borderWidth:1
    }
})