import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar} from 'react-native'
import React, {useEffect} from 'react'
import {useCartStore} from '../../../store/cart'
import RoundButton from '../../atoms/RoundButton'
import {XMarkIcon} from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'
import PrimaryButton from '../../atoms/Buttons/PrimaryButton'
import {IS_ANDROID} from '../../../utils/constants'

const DELIVERY_FEE = 2.99

const CartPage = () => {
  const {
    items,
    restaurant,
    setShowCartCard,
    totalPrice,
    totalCount,
    removeItemFromCart,
    clearCart
  } = useCartStore()
  const navigation = useNavigation()

  const closeCartModalPage = () =>
    navigation.canGoBack ? navigation.goBack() : navigation.navigate('Home')

  const handlePlaceOrder = () => {
    navigation.navigate('PreparingOrder')
    setShowCartCard(false)
    setTimeout(() => {
      clearCart()
    }, 4000)
  }

  useEffect(() => {
    setShowCartCard(false)

    return () => {
      setShowCartCard(true)
    }
  }, [])

  useEffect(() => {
    if (!totalCount) closeCartModalPage()
  }, [totalCount])

  return (
    <>
      {IS_ANDROID && <StatusBar backgroundColor="#fff" />}
      <View className="flex flex-col gap-y-4">
        <View
          className={`px-4 ${
            IS_ANDROID ? 'py-4' : 'py-6'
          } w-full flex flex-row items-start justify-between bg-white`}
        >
          <View className="flex items-end justify-center w-2/3">
            <View className="flex items-center justify-center">
              <Text className="text-2xl font-bold">Cart</Text>
              <Text className="text-xl text-[#499A98] font-medium">{restaurant?.name}</Text>
            </View>
          </View>

          <View className="w-1/3 flex flex-row justify-end">
            <RoundButton
              buttonText={<XMarkIcon strokeWidth={5} color="#fff" />}
              classes="!w-12 !h-12"
              textClasses="!text-4xl tracking-widest align-middle text-center"
              onPressAction={() => closeCartModalPage()}
            />
          </View>
        </View>

        <View className="p-4 w-full flex flex-row items-center justify-between bg-white">
          <View className="flex flex-row items-center gap-x-4">
            <Image src={restaurant?.imageUrl} className="w-10 h-10 rounded-full" />
            <Text className="text-lg">Deliver in 50-75 min</Text>
          </View>
          <TouchableOpacity onPress={() => closeCartModalPage()}>
            <Text className="text-lg font-bold tracking-wider text-[#00CCBC]">Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="my-4">
        {items?.length > 0
          ? items.map((item, index) => {
              return (
                <View
                  key={item?._id + index}
                  className={`flex flex-row gap-x-4 justify-between w-full items-center ${
                    index !== items?.length - 1 ? 'border-b border-b-gray-100' : ''
                  } p-3 bg-white`}
                >
                  <View className="flex flex-row items-center gap-x-4">
                    <Text className="text-2xl font-bold tracking-wider text-[#499A98]">
                      {item?.cartCount}x
                    </Text>
                    <Image src={item?.imageUrl} className="w-12 h-12 rounded-full" />
                    <Text className="text-lg">{item.name}</Text>
                  </View>

                  <View className="flex flex-col items-end">
                    <Text className="text-lg font-bold tracking-wider">£{item.price}</Text>
                    <TouchableOpacity onPress={() => removeItemFromCart(item._id)}>
                      <Text className="text-lg font-bold tracking-wider text-[#00CCBC]">
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          : null}
      </ScrollView>

      <View className={`flex flex-col gap-y-4 bg-white ${IS_ANDROID ? 'pb-4' : 'pb-12'} p-6`}>
        <View className="w-full flex flex-col bg-white gap-y-4">
          <View className="flex flex-row w-full justify-between items-center">
            <Text className="text-lg font-bold tracking-wider text-[#499A98]">Subtotal</Text>
            <Text className="text-lg font-bold tracking-wider text-[#499A98]">£{totalPrice}</Text>
          </View>

          <View className="flex flex-row w-full justify-between items-center">
            <Text className="text-lg font-bold tracking-wider text-[#499A98]">Delivery Fee</Text>
            <Text className="text-lg font-bold tracking-wider text-[#499A98]">£{DELIVERY_FEE}</Text>
          </View>

          <View className="flex flex-row w-full justify-between items-center">
            <Text className="text-2xl font-medium tracking-wider">Order Total</Text>
            <Text className="text-2xl font-bold tracking-wider">
              £{Number(totalPrice + DELIVERY_FEE).toFixed(2)}
            </Text>
          </View>

          <PrimaryButton text="Place Order" onPress={handlePlaceOrder} />
        </View>
      </View>
    </>
  )
}

export default CartPage
