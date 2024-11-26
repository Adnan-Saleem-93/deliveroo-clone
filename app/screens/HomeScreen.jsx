import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../components/templates/HomeTemplate'
import Categories from '../components/organisms/Categories'
import OffersNearYou from '../components/organisms/OffersNearYou'

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
        <View className="flex-col gap-y-8">
          <Categories />

          <OffersNearYou />
        </View>
      </ScrollView>
    </HomeTemplate>
  )
}

export default HomeScreen
