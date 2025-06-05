import {Text, SafeAreaView} from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import DeliverooLogo from '../atoms/DeliverooLogo'

const WelcomePage = () => {
  const {navigate} = useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Home')
    }, 2500)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-200">
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        className="flex-row justify-center items-center flex-1 gap-x-4"
      >
        <DeliverooLogo classes="h-20 w-20" />
        <Text className="text-6xl font-extrabold text-[#04CBBB]">Deliveroo</Text>
      </Animatable.View>
    </SafeAreaView>
  )
}

export default WelcomePage
