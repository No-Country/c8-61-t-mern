import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { Image } from 'react-native-elements'
import TitleComponent from '../components/TitleComponent'
import SettingsIcon from '../components/icons/SettingsIcon'
import { useNavigation } from '@react-navigation/native'
import ButtonComponent from "../components/ButtonComponent";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TransferScreen() {
  const navigation = useNavigation()
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

      <TitleComponent text="Enviar dinero a ...." />

      <Image
        source={require("../assets/Images/Transferir-8-imagen.png")}
        style={styles.img}>
      </Image>

      <TextInput style={styles.input}
        placeholder="Ingresar monto"
        autoCapitalize="none"
      />

      <View>
        <View style={styles.button}>
          <ButtonComponent styleType={"btnPrincipal"} text="Enviar" />
        </View>
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 200,
  },
  input: {
    width: '70%',
    height: 40,
    textAlign: 'center'
  }
})