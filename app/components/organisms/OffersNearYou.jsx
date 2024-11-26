import {View, ScrollView, Text} from 'react-native'
import React from 'react'
import {OffersNearYouList} from '../../data/offersNearYou'
import OfferNearYouCard from '../molecules/Cards/OfferNearYouCard'

const OffersNearYou = () => {
  return (
    <View className="flex-col gap-y-3">
      <View className="flex-col gap-y-1">
        <Text className="text-xl font-bold text-black">Offers Near You</Text>
        <Text className="text-gray-500">Why not support your local restaurant tonight!</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-x-3">
          {OffersNearYouList.map((offers) => {
            return <OfferNearYouCard key={offers.id} {...offers} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default OffersNearYou
