import {View, ScrollView, Platform} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../components/templates/HomeTemplate'
import Categories from '../components/organisms/Categories'
import OffersNearYou from '../components/organisms/OffersNearYou'
import Featured from '../components/organisms/Featured'
import TastyDiscounts from '../components/organisms/TastyDiscounts'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <ScrollView
        contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 100}}
        className="p-4"
      >
        <View className="flex-col gap-y-5">
          <Categories />

          <OffersNearYou />

          <Featured />

          <TastyDiscounts />
        </View>
      </ScrollView>
    </HomeTemplate>
  )
}

export default HomeScreen
