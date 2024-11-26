import {View, ScrollView, Text} from 'react-native'
import React from 'react'
import {OffersNearYouList} from '../../data/offersNearYou'
import FoodItemCard from '../molecules/Cards/FoodItemCard'

const Featured = () => {
  return (
    <View className="flex-col gap-y-3">
      <View className="flex-col gap-y-1">
        <Text className="text-xl font-bold text-black">Featured</Text>
        <Text className="text-gray-500">Paid placements from our partners</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-x-3">
          {OffersNearYouList.map((offers) => {
            return <FoodItemCard key={offers.id} {...offers} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Featured
