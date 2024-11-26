import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const CategoryCard = ({id, text, img}) => {
  return (
    <TouchableOpacity className="relative">
      <Image className="object-contain rounded-lg h-28 w-28" style={[styles.darken]} source={img} />

      <Text className="absolute bottom-[8px] left-[8px] text-white font-bold">{text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  darken: {
    filter: 'brightness(65%)'
  }
})
