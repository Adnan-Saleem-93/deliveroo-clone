import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import {useCartStore} from '../../../store/cart'

const CartPage = () => {
  const {setShowCartCard} = useCartStore()

  useEffect(() => {
    setShowCartCard(false)

    return () => {
      setShowCartCard(true)
    }
  }, [])
  return (
    <View>
      <Text>CartPage</Text>
    </View>
  )
}

export default CartPage
