import {View, Text, Image} from 'react-native'
import React from 'react'

const CategoryCard = ({id, text, img}) => {
  return (
    <View className="relative">
      <Image source={img} className="object-contain w-28 h-28 rounded-lg grayscale" />
      <Text className="absolute bottom-[8px] left-[8px] text-white font-bold">{text}</Text>
    </View>
  )
}

export default CategoryCard
