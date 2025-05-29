import {View, ScrollView, Platform} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'

import Categories from '../../organisms/Categories'
import FeaturedCategorySection from '../../organisms/FeaturedCategorySection'
import {getFeaturedCategories} from '../../../utils/api'
import HomeTemplate from '../../templates/HomeTemplate'
import LoadingFeaturedRestaurantCategories from './loading'

const HomePage = () => {
  const navigation = useNavigation()
  const [featuredRestaurantCategories, setFeaturedRestaurantCategories] = useState([])
  const [isFetchingCategories, setIsFetchingRestaurantCategories] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsFetchingRestaurantCategories(true)
        const response = await getFeaturedCategories()
        setFeaturedRestaurantCategories(response)
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetchingRestaurantCategories(false)
      }
    })()

    return () => {
      setFeaturedRestaurantCategories([])
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

          {isFetchingCategories ? (
            <LoadingFeaturedRestaurantCategories />
          ) : featuredRestaurantCategories.length > 0 ? (
            featuredRestaurantCategories.map((category, idx) => {
              return <FeaturedCategorySection key={category?._id || idx} {...category} />
            })
          ) : null}
        </View>
      </ScrollView>
    </HomeTemplate>
  )
}

export default HomePage
