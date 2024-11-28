import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'

const SectionHeader = ({title, subTitle = null, onTouchLink = null}) => {
  return (
    <View className="flex-row items-center justify-between gap-x-2">
      <View className="flex-col gap-y-1">
        <Text className="text-xl font-bold text-black">{title}</Text>
        {subTitle && <Text className="text-gray-500">{subTitle}</Text>}
      </View>
      <TouchableOpacity onPress={() => (onTouchLink ? onTouchLink() : null)}>
        <ArrowRightIcon color="#808080" />
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader
