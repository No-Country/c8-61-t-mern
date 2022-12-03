import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import { Image } from 'react-native-elements'

export default function ProfileScreen() {
  
  return (
    <View style={styles.screenContainer}>
      
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