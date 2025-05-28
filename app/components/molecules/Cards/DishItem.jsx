import React, {useEffect, useMemo, useState} from 'react'
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native'
import {useCartStore} from '../../../store/cart'
import RoundButton from '../../atoms/RoundButton'
import {filterItemCountById} from '../../../utils/helpers'
import {useModalStore} from '../../../store/modal'
import ClearCart from '../ModalContents/ClearCart'

const DishItem = ({
  _id,
  imageUrl,
  price,
  name,
  short_description,
  restaurantName,
  restaurantImageUrl
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const {
    items,
    restaurant,
    addItemToCart,
    removeItemFromCart,
    wasCartCleared,
    resetWasCartClearedStatus
  } = useCartStore()
  const [itemCount, setItemCount] = useState(0)
  const {setModalContent, setShowModal} = useModalStore()
  const [itemToBeAdded, setItemToBeAdded] = useState(null)

  useEffect(() => {
    setItemCount(filterItemCountById(items, _id))
  }, [items])

  const addItem = () => {
    // check if the dish being added is from a different restaurant
    const obj = {
      restaurant: {name: restaurantName, imageUrl: restaurantImageUrl}, // restaurant details
      dish: {_id, price, name, imageUrl}
    } // selected dish details
    if (restaurant && restaurant?.name !== restaurantName) {
      // show modal to confirm removal of previously added dishes from the other restaurant
      setShowModal(true)
      setModalContent(<ClearCart />)
      setItemToBeAdded(obj)
    } else {
      addItemToCart({...obj.restaurant}, {...obj.dish})
    }
  }

  useEffect(() => {
    if (wasCartCleared && itemToBeAdded) {
      addItemToCart({...itemToBeAdded.restaurant}, {...itemToBeAdded.dish})

      setTimeout(() => {
        resetWasCartClearedStatus()
      }, 1000)
    }
  }, [wasCartCleared])

  const removeItem = () => {
    removeItemFromCart(_id)
  }

  const isItemNotAddedToCart = useMemo(() => itemCount === 0, [itemCount])

  return (
    <View className="flex flex-col justify-between gap-y-4 border border-gray-200 w-full p-4 bg-white">
      <TouchableOpacity
        className="flex flex-col justify-between gap-y-4 w-full"
        onPress={() => setIsPressed(!isPressed)}
      >
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
      </TouchableOpacity>
      {isPressed && (
        <View className="w-full">
          <View className="flex flex-row gap-x-3 items-center w-full">
            {/* REMOVE Item from Cart Button */}
            <RoundButton
              buttonText="-"
              onPressAction={() => (isItemNotAddedToCart ? null : removeItem())}
              disabled={isItemNotAddedToCart}
              classes={isItemNotAddedToCart ? 'opacity-50' : ''}
            />

            {/* Item Count */}
            <Text className="text-xl font-medium">{itemCount}</Text>

            {/* ADD Item to Cart Button */}
            <RoundButton buttonText="+" onPressAction={addItem} />
          </View>
        </View>
      )}
    </View>
  )
}

export default DishItem
