import {SafeAreaView, View} from 'react-native'
import React from 'react'
import HomeScreenHeader from '../organisms/HomeScreenHeader'

const HomeTemplate = ({children}) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-slate-100 w-screen h-screen">
        {/* HEADER */}
        <HomeScreenHeader />

        {children}
      </View>
    </SafeAreaView>
  )
}

export default HomeTemplate
