import {View, Text} from 'react-native'
import React from 'react'
import PrimaryButton from '../../atoms/Buttons/PrimaryButton'
import DefaultButton from '../../atoms/Buttons/DefaultButton'
import {useCartStore} from '../../../store/cart'
import {useModalStore} from '../../../store/modal'

const ClearCart = () => {
  const {clearCart: clearBasket} = useCartStore()
  const {setShowModal} = useModalStore()
  return (
    <View className="py-2">
      <View className="flex justify-center gap-y-4">
        <Text className="text-xl font-bold text-center">
          This action will clear all the items previously added to the cart!
        </Text>
        <Text className="text-lg font-medium text-slate-600 text-center">
          Are you sure you want to continue?
        </Text>

        <View className="flex-row items-center justify-center gap-x-8">
          <PrimaryButton
            buttonClasses="!py-3"
            textClasses="text-xl"
            onPress={() => {
              clearBasket && clearBasket()
              setShowModal(false)
            }}
          />
          <DefaultButton
            buttonClasses="!py-3"
            textClasses="text-xl"
            onPress={() => setShowModal(false)}
          />
        </View>
      </View>
    </View>
  )
}

export default ClearCart
