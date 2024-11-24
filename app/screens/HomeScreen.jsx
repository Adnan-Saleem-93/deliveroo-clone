import {View, Text, SafeAreaView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../components/templates/HomeTemplate'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return <HomeTemplate></HomeTemplate>
}

export default HomeScreen
