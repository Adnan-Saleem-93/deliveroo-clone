import {View, ScrollView, Text} from 'react-native'
import React from 'react'
import {OffersNearYouList} from '../../data/offersNearYou'
import FoodItemCard from '../molecules/Cards/FoodItemCard'
import SectionHeader from '../molecules/SectionHeader'

const TastyDiscounts = () => {
  return (
    <View className="flex-col gap-y-3">
      <SectionHeader title="Tasty Discounts" subTitle="Everyone enjoys these tasty discounts!" />
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

export default TastyDiscounts
