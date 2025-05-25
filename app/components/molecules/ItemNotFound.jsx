import React from 'react'
import {Text, View} from 'react-native'

const ItemNotFound = () => {
  return (
    <View className="flex items-center justify-center flex-col gap-y-6">
      <Text className="text-5xl font-bold text-center">Item Not Available</Text>
      <Text className="text-2xl font-medium text-slate-500 text-center">
        This item is currently unavailable or has been removed from the menu
      </Text>
    </View>
  )
}

export default ItemNotFound
