import {View, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {OffersNearYouList} from '../../data/offersNearYou'
import FoodItemCard from '../molecules/Cards/FeaturedItemCard'
import SectionHeader from '../molecules/SectionHeader'
import {useNavigation} from '@react-navigation/native'
import {getFeaturedCategoryById} from '../../utils/api'

const Featured = ({_id, name, short_description}) => {
  const [featureItem, setFeatureItem] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getFeaturedCategoryById(_id)
        setFeatureItem(response)
      } catch (error) {
        console.log(error)
      }
    })()

    return () => {
      setFeatureItem([])
    }
  }, [])
  const navigation = useNavigation()

  return (
    <View className="flex-col gap-y-3">
      <SectionHeader
        title={name}
        subTitle={short_description}
        onTouchLink={() => navigation.navigate('FeaturedItems')}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-x-3">
          {featureItem?.restaurants?.map((restaurant) => {
            return <FoodItemCard key={restaurant?._id} {...restaurant} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Featured
