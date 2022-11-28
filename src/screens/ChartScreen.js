import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function ChartScreen() {

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenContainer_title}>TransactionsScreen</Text>
      <View style={styles.screenContainer_content}>
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
    fontSize: 30
  },
  screenContainer_content: {
    flex: 1,
    justifyContent: "center"

  }
})