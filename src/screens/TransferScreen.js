
import { useState } from "react";
import { Alert, Modal, StyleSheet, TextInput, Text, Pressable, View } from "react-native";
import Constants from 'expo-constants'
import React from 'react'
import { Image } from 'react-native-elements'
import TitleComponent from '../components/TitleComponent'
//import { useNavigation } from '@react-navigation/native'
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
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>



         
     </SafeAreaView>




      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
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
    marginTop: 550,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
    color: "#9CD919"
  },
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
});

export default App;