import {SafeAreaView, View} from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import {useNavigation} from '@react-navigation/native'

const PreparingOrderPage = () => {
  const {navigate} = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Delivery')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-400/80">
      <View className="flex w-full items-center justify-center">
        <Animatable.Image
          source={require('../../../assets/food-prep.gif')}
          animation="slideInUp"
          iterationCount={1}
          className="h-96 w-96"
        />
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          iterationDelay={1}
          className="text-2xl font-bold text-white text-center m-20"
        >
          Waiting for the Restaurant to accept your order
        </Animatable.Text>

        <Animatable.View animation="slideInUp" iterationCount={1} iterationDelay={2}>
          <Progress.CircleSnail
            color={['red', 'purple', 'white']}
            size={100}
            indeterminate={true}
            thickness={6}
          />
        </Animatable.View>
      </View>
    </SafeAreaView>
  )
}

export default PreparingOrderPage
