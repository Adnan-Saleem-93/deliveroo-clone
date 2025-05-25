import React from 'react'
import {Platform, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import ItemNotFound from '../../molecules/ItemNotFound'
import {useNavigation} from '@react-navigation/native'
import {backNavigation} from '../../../utils/helpers'

const RestaurantNotFound = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView
      contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 40}}
      className="bg-slate-100"
    >
      <View className="flex flex-col gap-y-6 p-4 items-center justify-center w-full h-full">
        <ItemNotFound />

        <TouchableOpacity
          className="p-4 bg-[#00CCBC] shadow-md w-full"
          onPress={() => backNavigation(navigation)}
        >
          <Text className="text-white font-extrabold text-center text-2xl">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RestaurantNotFound
