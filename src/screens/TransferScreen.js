
import { useState } from "react";
import { Alert, Modal, StyleSheet, TextInput, Text, Pressable, View } from "react-native";
import Constants from 'expo-constants'
import React from 'react'
import { Image } from 'react-native-elements'
import TitleComponent from '../components/TitleComponent'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native'
//import ButtonComponent from "../components/ButtonComponent";
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      

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
        

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView2}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Revision</Text>
            <View style={styles.modalContaint1}>
            <Image
           source={require("../assets/Images/visalogo.png")}
           style={styles.img2}>
         </Image>
                {/* <Icon name="chevron-right" size={20} style={{ color:"#52A62D", padding:10}}
                    // onPress={() => {
                    //     navigation.navigate("CardComponent")
                    //  }}
                 /> */}
                <Text style={styles.texto}>Tarjeta de debito 3245 Preferida</Text>
                
            </View>
            <View>
                <Text style={styles.modalText}>Total        $1234</Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     </SafeAreaView>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Enviar dinero</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -150
  },
  centeredView2: {
    position:"absolute",
    width:"100%",
    bottom:0,
    // paddingBottom:50
  },
  modalView: {
    // marginHorizontal: 10,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius:20,
    // borderTopRightRadiusRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    //borderRadius: 20,
    padding: 20,
    elevation: 2,
    //alignItems: 'center',
    borderRadius: 41,
    flex: 1,
    minHeight: 50,
    justifyContent: 'center',
    marginBottom: 20,
    maxHeight: 50,
    width: 164,
  },
  buttonOpen: {
    //backgroundColor: "#F194FF",
    backgroundColor: "#9CD919",
    borderRadius: 41,
    padding: 15,
  },
  buttonClose: {
    backgroundColor: "#9CD919",
    borderRadius: 41,
    padding: 15,
  },
  textStyle: {
    //color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#9CD919",
    fontSize: 40,
    fontStyle: 'bold'
  },
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  img2: {
    width: 30,
    height: 30,
    alignItems: 'left'
  },
  button: {
  marginTop: 200,
  },
  input: {
    width: '70%',
    height: 40,
    textAlign: 'center'
   },
   modalContaint1: {
    flexDirection: 'column',
    borderBottomWidth:1,
    padding: 20,
    marginBottom: 20
   }
});

export default App;