import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Keyboard, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import ButtonComponent from "../components/ButtonComponent";
import TitleComponent from "../components/TitleComponent";
import useAuth from "../hooks/useAuth";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import FormComponent from "../components/FormComponent";
import seacrhUsers from '../utils/SearchContact.json'
export default function CuentaWallyScreen() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    const [authContacts, setAuthContacts] = React.useState(auth.contacts)
    const [search, setSearch] = React.useState()
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
                <TitleComponent text="Añadir nuevo contacto" />
            </View>
            <View style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <TextInput onChangeText={(text) => setSearch(text)} placeholder="Buscar por Wallitag" style={{ borderBottomWidth: 1, width: "80%", padding: 10, marginTop: 20 }} />
                <TouchableOpacity onPress={() => {
                    // console.log(search);
                    const result = seacrhUsers.filter(user => user.id === search)
                    setAuthContacts([...authContacts, result[0]])
                    console.log(result[0]);
                }} style={styles.btnPrincipalBlue}>
                    <Text style={styles.btnPrincipalBlue_text}>Buscar</Text>
                </TouchableOpacity>
            </View>
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
            <ScrollView contentContainerStyle={{
                // backgroundColor: "#FFFFFF",
                alignItems: "center",
                // paddingTop: "10%",
                paddingBottom: "30%",
                // height:"100%"
            }} style={{ width: "100%", display: "flex" }}>
                {authContacts.map((contact) =>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("SelectAmountScreen", { contact: contact })
                    }} key={contact.id} style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "gray",
                        width: "80%",
                        paddingVertical: 15,
                        paddingHorizontal: 10

                    }}>
                        <Text style={{ fontSize: 15 }}>Nombre: {contact.firstName} {contact.lastName}</Text>
                        <Text style={{ color: "gray" }}>Wallytag: {contact.id}</Text>
                        <Icon name="chevron-right" size={20} style={{ color: "#52A62D", padding: 10, position: "absolute", right: 0, top: "50%" }}
                        />
                    </TouchableOpacity>
                )}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer_title: {
        fontSize: 30
    },
    btnPrincipalBlue: {
        alignItems: 'center',
        backgroundColor: "#5CB9F2",
        borderRadius: 41,
        flex: 1,
        height: 50,
        minHeight: 50,
        justifyContent: 'center',
        marginVertical: 50,
        maxHeight: 50,
        width: 164,
    },
    btnPrincipalBlue_text: {
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },

})