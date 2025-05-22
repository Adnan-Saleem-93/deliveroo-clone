import React from 'react'
import {Platform, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native'
import AlternateHeader from '../organisms/AlternateHeader'

const AlternateHeaderTemplate = ({children}) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="bg-slate-100 w-screen h-screen">
        <AlternateHeader />

        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default AlternateHeaderTemplate
