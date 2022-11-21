import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function Transferencia() {
  return (
    <View>
      <Text style={styles.title}>Transferencia</Text>
      <TextInput
        placeholder="CVU destino"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Monto"
        style={styles.input}
        autoCapitalize="none"
        //secureTextEntry={true}
      />
      <Button title="Transferir" onPress={() => console.log("Transfiriendo...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});