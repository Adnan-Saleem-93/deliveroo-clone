import React, {useEffect, useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {useCartStore} from '../../../store/cart'

const DishItem = ({_id, imageUrl, price, name, short_description}) => {
  const [isPressed, setIsPressed] = useState(false)
  const {items, addItemToCart, removeItemFromCart} = useCartStore()
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    const filterItemCountById = () => {
      const itemsById = items.filter((x) => x._id === _id)
      const itemLength = itemsById?.length

      setItemCount(itemLength)
    }
    filterItemCountById()
  }, [items])

  const addItem = () => {
    addItemToCart({_id, price, name})
  }
  const removeItem = () => {
    removeItemFromCart(_id)
  }

  return (
    <TouchableOpacity
      className="flex flex-col justify-between gap-y-6 border border-gray-200 w-full p-4 bg-white"
      onPress={() => setIsPressed(!isPressed)}
    >
      <View className="flex flex-col justify-between gap-y-4 w-full">
        <View className="flex flex-row justify-between items-center gap-x-6 w-full">
          <View className="flex flex-col justify-center gap-y-3 w-1/2">
            <Text className="text-2xl text-[#353535] font-bold">{name}</Text>
            <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">
              {short_description}
            </Text>
            <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">${price}</Text>
          </View>
          <View>
            <Image progressiveRenderingEnabled src={imageUrl} className="w-28 h-28 rounded-md" />
          </View>
        </View>

        {isPressed && (
          <View className="w-full">
            <View className="flex flex-row gap-x-3 items-center w-full">
              {/* REMOVE Item from Cart Button */}
              <TouchableOpacity
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00CCBC]"
                onPress={removeItem}
              >
                <Text className="text-4xl font-extrabold text-white">-</Text>
              </TouchableOpacity>

              {/* Item Count */}
              <Text className="text-2xl font-semibold">{itemCount}</Text>

              {/* ADD Item to Cart Button */}
              <TouchableOpacity
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00CCBC]"
                onPress={addItem}
              >
                <Text className="text-4xl font-extrabold text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default DishItem
