import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";
import useAuth from "../hooks/useAuth";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function CuentaWallyScreen() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{
                // position: "absolute",
                // top: 0,
                // marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                // height: 80,
                display: "flex",
                alignItems: "center",
                width: "100%",
            }} >
                <TitleComponent text="Elegir usuario Wally" />
            </View>
            <View style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                {auth.contacts.map((contact) =>
                    <View key={contact.id} style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "gray",
                        width: "80%",
                        paddingVertical: 15,
                        paddingHorizontal: 10

                    }}>
                        <Text style={{ fontSize: 15 }}>Nombre: {contact.firstName} {contact.lastName}</Text>
                        <Text style={{ color: "gray" }}>Wallytag: {contact.id}</Text>
                        <Icon name="chevron-right" size={20} style={{ color: "#52A62D", padding: 10, position: "absolute", right: 0, top: "50%" }}
                            onPress={() => {
                                navigation.navigate("SelectAmountScreen", { contact: contact })
                            }} />
                    </View>
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer_title: {
        fontSize: 30
    },

})