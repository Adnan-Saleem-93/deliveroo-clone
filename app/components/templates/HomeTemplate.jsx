import {SafeAreaView, View, StyleSheet, Platform, StatusBar} from 'react-native'
import React from 'react'
import HomeScreenHeader from '../organisms/HomeScreenHeader'

const HomeTemplate = ({children}) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="bg-slate-100 w-screen h-screen">
        {/* HEADER */}
        <HomeScreenHeader />

        {children}
      </View>
    </SafeAreaView>
  )
}

export default HomeTemplate

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
