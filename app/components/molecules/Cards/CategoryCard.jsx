import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const CategoryCard = ({_id, title, imageUrl}) => {
  return (
    <TouchableOpacity className="relative">
      <Image
        className="object-contain rounded-lg h-28 w-28"
        style={[styles.darken]}
        src={imageUrl}
      />

      <Text className="absolute bottom-[8px] left-[8px] text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  darken: {
    filter: 'brightness(65%)'
  }
})
