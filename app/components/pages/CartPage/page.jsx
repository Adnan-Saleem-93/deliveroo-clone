import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import {useCartStore} from '../../../store/cart'
import RoundButton from '../../atoms/RoundButton'
import {XMarkIcon} from 'react-native-heroicons/outline'

const CartPage = () => {
  const {items, setShowCartCard, totalPrice} = useCartStore()

  useEffect(() => {
    setShowCartCard(false)

    return () => {
      setShowCartCard(true)
    }
  }, [])

  return (
    <View className="w-full h-full">
      <View className="h-full w-full flex flex-col gap-y-8 justify-between">
        <View className="flex flex-col gap-y-8">
          <View className="px-4 py-6 w-full flex flex-row items-center justify-between bg-white">
            <View className="w-1/3" />

            <View className="flex flex-col items-center justify-center w-1/3">
              <Text className="text-2xl font-bold">Cart</Text>
              <Text className="text-xl text-[#499A98] font-medium">Item Name</Text>
            </View>

            <View className="w-1/3 flex flex-row justify-end">
              <RoundButton
                buttonText={<XMarkIcon strokeWidth={5} color="#fff" />}
                classes="!w-12 !h-12"
                textClasses="!text-4xl tracking-widest align-middle text-center"
              />
            </View>
          </View>

          <View className="p-4 w-full flex flex-row items-center justify-between bg-white">
            <Text className="text-lg">Deliver in 50-75 min</Text>

            <TouchableOpacity>
              <Text className="text-lg font-bold tracking-wider text-[#00CCBC]">Change</Text>
            </TouchableOpacity>
          </View>

          <View className="w-full flex flex-col bg-white">
            {items?.length > 0
              ? items.map((item, index) => {
                  return (
                    <View
                      className={`flex flex-row gap-x-4 justify-between w-full items-center ${
                        index !== items.length - 1 ? 'border-b border-b-gray-100' : ''
                      } p-4`}
                    >
                      <Text className="text-lg">{item.name}</Text>

                      <View className="flex flex-col items-end">
                        <Text className="text-lg font-bold tracking-wider">£{item.price}</Text>
                        <TouchableOpacity>
                          <Text className="text-lg font-bold tracking-wider text-[#00CCBC]">
                            Remove
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })
              : null}
          </View>
        </View>

        <View className="flex flex-col gap-y-8 bg-white pb-12 p-6">
          <View className="w-full flex flex-col bg-white gap-y-4">
            <View className="flex flex-row w-full justify-between items-center">
              <Text className="text-lg font-bold tracking-wider text-[#499A98]">Subtotal</Text>
              <Text className="text-lg font-bold tracking-wider text-[#499A98]">£{totalPrice}</Text>
            </View>

            <View className="flex flex-row w-full justify-between items-center">
              <Text className="text-lg font-bold tracking-wider text-[#499A98]">Delivery Fee</Text>
              <Text className="text-lg font-bold tracking-wider text-[#499A98]">£2.99</Text>
            </View>

            <View className="flex flex-row w-full justify-between items-center">
              <Text className="text-lg font-medium tracking-wider">Order Total</Text>
              <Text className="text-lg font-bold tracking-wider">£2.99</Text>
            </View>

            <TouchableOpacity className="rounded-lg p-4 bg-[#00CCBC]">
              <Text className="text-2xl font-extrabold text-white text-center">Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartPage
