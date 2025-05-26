import {View} from 'react-native'
import React from 'react'
import {useCartStore} from '../../store/cart'

const EmptySpace = () => {
  const {items} = useCartStore()

  return <>{items.length > 0 && <View className="w-full bg-white py-12"></View>}</>
}

export default EmptySpace
