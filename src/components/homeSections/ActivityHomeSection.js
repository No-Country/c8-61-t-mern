import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextMask } from 'react-native-masked-text'

export default function ActivityHomeSection() {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", width: "100%", paddingHorizontal: "6%", marginTop: 60 }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 50 }}>
                <Text style={styles.title}>Mi Actividad en </Text>
                <Text style={{
                    ...styles.title,
                    ...styles.title_wally
                }} >Wally</Text>
            </View>
            <View>

                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#EBF3CE", padding: 10 }}>
                    <View>
                        <Text>Transferencia recibida</Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.37)" }}>De persona remitente</Text>
                    </View>
                    <View>
                        <TextMask style={{ color: "#52A62D" }}
                            value={"122306"}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#EBF3CE", padding: 10 }}>
                    <View>
                        <Text>Transferencia enviada</Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.37)" }}>A persona destino</Text>
                    </View>
                    <View>
                        <TextMask style={{ color: "#3295D1" }}
                            value={"122306"}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '$',
                            }} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#EBF3CE", padding: 10 }}>
                    <View>
                        <Text>Transferencia enviada</Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.37)" }}>A persona destino</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#3295D1" }}>$1.223,06</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#52A62D",
        fontWeight: "700",
        fontSize: 24,
    },
    title_wally: {
        fontSize: 38,
        color: "#5CB9F2"
    }
})