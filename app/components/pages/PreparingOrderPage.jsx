import {Text, SafeAreaView, Image} from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import {useNavigation} from '@react-navigation/native'

const PreparingOrderPage = () => {
  const {navigate} = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigate('Delivery')
    }, 4000)
  }, [])
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-400/80">
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        className="flex w-full items-center justify-center"
      >
        <Image source={require('../../../assets/food-prep.gif')} className="h-96 w-96" />
        <Text className="text-2xl font-bold text-white text-center m-20">
          Waiting for the Restaurant to accept your order
        </Text>

        <Progress.CircleSnail
          color={['red', 'purple', 'white']}
          size={100}
          indeterminate={true}
          thickness={6}
        />
      </Animatable.View>
    </SafeAreaView>
  )
}

export default PreparingOrderPage
