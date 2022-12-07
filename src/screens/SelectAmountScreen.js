import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Header, Icon, Image } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import TitleComponent from '../components/TitleComponent'
import ButtonComponent from "../components/ButtonComponent";


// const goBack = () => {
//     return (
//         <Icon name='arrow-back' color='#52A62D' size={35} onPress={() => navigate.goBack()} />
//     )
// }

export default function SelectAmountScreen({ navigation, route }) {
    // const route =useRoute()
    const navigate = useNavigation()
    const { contact } = route.params
    // navigate.setOptions({
    //     Headers:{

    //     }
    //     title: () => <Text> contacto</Text>
    // })
    return (
        <View>
            <View style={{
                // position: "absolute",
                // top: 0,
                // marginTop: Constants.statusBarHeight,
                backgroundColor: "#EBF3CE",
                // height: 80,
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 100,
                // paddingBottom: 50,
                zIndex: 0

            }} >
                <TitleComponent text={contact.firstName + " " + contact.lastName} />
                <Image
                    source={require("../assets/Images/Transferir-8-imagen.png")}
                    style={styles.img}
                />

                <TextInput style={styles.input}
                    placeholder="Ingresar monto"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.button}>
                <ButtonComponent styleType={"btnPrincipal"} text="Enviar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        // position:"absolute",
        top: -10,
        // left: 10,
        // zIndex: 11,
        // width: Dimensions.get("window").width / 1.4,
        // height: Dimensions.get("window").width / 1.4,
        width: 150,
        //  backgroundColor: "#D4F194",
        height: 150,
        // resizeMode: 'contain'
    },
    input: {
        width: '70%',
        height: 40,
        textAlign: 'center'
    },
    button: {
        marginTop: 300,
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 120,
    }
})