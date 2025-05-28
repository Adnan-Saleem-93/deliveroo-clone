import {Text, TouchableOpacity} from 'react-native'
import React from 'react'

const DefaultButton = ({text = 'Cancel', buttonClasses = '', textClasses = '', onPress = null}) => {
  return (
    <TouchableOpacity className={`rounded-lg p-4 bg-[#ebeded] ${buttonClasses}`} onPress={onPress}>
      <Text className={`text-2xl font-extrabold text-gray-500 text-center ${textClasses}`}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default DefaultButton
