import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../components/templates/HomeTemplate'
import Categories from '../components/organisms/Categories'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <ScrollView className="p-4">
        <Categories />
      </ScrollView>
    </HomeTemplate>
  )
}

export default HomeScreen
