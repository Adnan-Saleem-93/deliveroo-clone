import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {ChevronRightIcon} from 'react-native-heroicons/outline'

const HaveFoodAllergy = () => {
  return (
    <View className="border border-gray-200 p-4 bg-white">
      <TouchableOpacity className="flex flex-row justify-between gap-x-4 w-full">
        <Text className="text-xl text-[#353535] font-semibold">Have a food allergy?</Text>
        <ChevronRightIcon color="#94a3b8" strokeWidth={3} />
      </TouchableOpacity>
    </View>
  )
}

export default HaveFoodAllergy
