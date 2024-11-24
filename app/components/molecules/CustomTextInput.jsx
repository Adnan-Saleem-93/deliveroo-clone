import {TextInput, View} from 'react-native'
import React, {useMemo} from 'react'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const CustomTextInput = ({classes = '', customIcon = null, placeholder = ''}) => {
  const InputIcon = useMemo(() => customIcon || MagnifyingGlassIcon, [customIcon])
  return (
    <View
      className={`flex-row item items-stretch justify-between w-full gap-x-2 rounded-lg p-3 bg-gray-300 ${classes}`}
    >
      <TextInput placeholder={placeholder} className="w-[90%]" textAlignVertical="center" />
      <InputIcon color="#707070" strokeWidth={2} />
    </View>
  )
}

export default CustomTextInput
