import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FunctionsHomeSection() {
    return (
        <View style={styles.functionsContainer}>
            <Text style={styles.sectionTitle}>Usar mis fondos</Text>
            <View style={styles.functionsComponents}>
                <View style={styles.component} >
                    <Text style={styles.componentText}>Retirar Dinero</Text>
                </View>
                <View style={styles.component} >
                    <Text style={styles.componentText}>Ingresar Dinero</Text>
                </View>
                <View style={styles.component} >
                    <Text style={styles.componentText}>Transferir Dinero</Text>
                </View>
                <View style={styles.component} >
                    <Text style={styles.componentText}>realizar Pagos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    functionsContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        height: 120,
        width: "100%",
        paddingTop: "5%",
        backgroundColor: "#D4F194"
    },
    sectionTitle: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 18,
    },
    functionsTitle: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 24,
    },
    functionsComponents: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        position: "absolute",
        top: 70,
        left: 0,
    },
    component: {
        height: 94,
        width: 74,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderColor: "#D4F194",
        borderWidth: 3,
    },
    componentText: {
        textAlign: "center",
        fontSize: 17
    },
})