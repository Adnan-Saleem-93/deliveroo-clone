import {View, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import FeaturedItemCard from '../molecules/Cards/FeaturedItemCard'
import SectionHeader from '../molecules/SectionHeader'
import {getFeaturedCategoryById} from '../../utils/api'
import Skeleton from '../atoms/Skeleton'

const FeaturedCategoryItem = ({_id, name, short_description}) => {
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

  return (
    <View className="flex-col gap-y-4">
      <SectionHeader title={name} subTitle={short_description} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-x-3">
          {featureItem?.restaurants?.map((restaurant) => {
            return <FeaturedItemCard key={restaurant?._id} {...restaurant} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default FeaturedCategoryItem
