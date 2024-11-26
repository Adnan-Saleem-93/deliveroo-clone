import {TextInput, TouchableOpacity, View} from 'react-native'
import React, {useMemo} from 'react'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const CustomTextInput = ({classes = '', width = 'w-full', customIcon = null, placeholder = ''}) => {
  const InputIcon = useMemo(() => customIcon || MagnifyingGlassIcon, [customIcon])
  return (
    <View
      className={`flex-row item items-center justify-between gap-x-2 rounded-lg p-2 bg-gray-200 ${classes} ${width}`}
    >
      <TextInput
        placeholder={placeholder}
        className="w-[90%]"
        textAlignVertical="center"
        keyboardType="default"
      />
      <TouchableOpacity>
        <InputIcon color="#707070" strokeWidth={2} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomTextInput
