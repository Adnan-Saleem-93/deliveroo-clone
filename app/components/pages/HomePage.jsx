import {View, ScrollView, Platform} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../templates/HomeTemplate'
import Categories from '../organisms/Categories'
import OffersNearYou from '../organisms/OffersNearYou'
import Featured from '../organisms/Featured'
import TastyDiscounts from '../organisms/TastyDiscounts'
import {client} from '../../../sanity-studio/sanity'
import {getFeaturedCategories} from '../../utils/api'

const HomePage = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getFeaturedCategories()
        setFeaturedCategories(response)
      } catch (error) {
        console.log(error)
      }
    })()

    return () => {
      setFeaturedCategories([])
    }
  }, [])

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

export default HomePage
