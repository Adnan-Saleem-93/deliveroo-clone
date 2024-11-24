import {SafeAreaView, View} from 'react-native'
import React from 'react'
import HomeScreenHeader from '../organisms/HomeScreenHeader'

const HomeTemplate = ({children}) => {
  return (
    <SafeAreaView>
      <View className="px-4">
        {/* HEADER */}
        <HomeScreenHeader />

        {children}
      </View>
    </SafeAreaView>
  )
}

export default HomeTemplate
