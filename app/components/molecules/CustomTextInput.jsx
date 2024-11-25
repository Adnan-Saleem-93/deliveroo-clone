import {TextInput, View} from 'react-native'
import React, {useMemo} from 'react'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const CustomTextInput = ({classes = '', width = 'w-full', customIcon = null, placeholder = ''}) => {
  const InputIcon = useMemo(() => customIcon || MagnifyingGlassIcon, [customIcon])
  return (
    <View
      className={`flex-row item items-stretch justify-between gap-x-2 rounded-lg p-3 bg-gray-200 ${classes} ${width}`}
    >
      <TextInput
        placeholder={placeholder}
        className="w-[90%]"
        textAlignVertical="center"
        keyboardType="default"
      />
      <InputIcon color="#707070" strokeWidth={2} />
    </View>
  )
}

export default CustomTextInput
