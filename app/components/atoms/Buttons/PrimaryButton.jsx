import {Text, TouchableOpacity} from 'react-native'
import React from 'react'

const PrimaryButton = ({
  text = 'Confirm',
  buttonClasses = '',
  textClasses = '',
  onPress = null
}) => {
  return (
    <TouchableOpacity className={`rounded-lg p-4 bg-[#00CCBC] ${buttonClasses}`} onPress={onPress}>
      <Text className={`text-2xl font-extrabold text-white text-center ${textClasses}`}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton
