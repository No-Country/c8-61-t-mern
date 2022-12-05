import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { Image } from 'react-native-elements'
import TitleComponent from '../components/TitleComponent'
import SettingsIcon from '../components/icons/SettingsIcon'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenContainer_content}>
        {/* <Text> sdasdas</Text> */}
        <View style={styles.bgCircle}>
          <Image
            source={require("../assets/Images/Perfil-12-Imagen-recorte.png")}
            style={styles.img}
          />
        </View>
        <View>
          {/* <Text>Nombre de usuario</Text>
          <Text>Editar nombre o apodo</Text> */}
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: Constants.statusBarHeight
  },
  screenContainer_title: {
    // fontSize: 30
    display:"flex",
    width: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#D4F194",
  },
  screenContainer_content: {
    // flex: 1,
    // justifyContent: "center"

  },
  bgCircle: {
    backgroundColor: "#52A62D",
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    // position:"relative",
    // borderWidth: 1,
    borderRadius: 500,
  },
  img: {
    // width: Dimensions.get("window").width / 1.4,
    // height: Dimensions.get("window").width / 1.4,
    width: 180,
    //  backgroundColor: "#D4F194",
    height: 180,
    resizeMode: 'contain',
  },
})