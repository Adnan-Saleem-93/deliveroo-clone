import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useCartStore} from '../../store/cart'
import {useNavigation, useRoute} from '@react-navigation/native'
import {useModalStore} from '../../store/modal'

const CartCard = () => {
  const {items, totalPrice, showCartCard, totalCount} = useCartStore()
  const {showModal} = useModalStore()
  const navigation = useNavigation()

  return (
    showCartCard &&
    items?.length > 0 &&
    !showModal && (
      <TouchableOpacity
        className="absolute bottom-12 w-full px-4"
        onPress={() => navigation.navigate('Cart')}
      >
        <View className="flex flex-row items-center justify-between w-full mx-auto p-4 shadow-md bg-[#499A98] rounded-lg">
          <Text className="text-xl text-white font-bold bg-[#347B78] py-2 px-4 rounded-lg">
            {totalCount}
          </Text>
          <Text className="text-2xl text-white font-bold">View Basket</Text>
          <Text className="text-2xl text-white font-bold">£{totalPrice}</Text>
        </View>
      </TouchableOpacity>
    )
  )
}

export default CartCard
