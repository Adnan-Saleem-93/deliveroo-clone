import {View, ScrollView, Text} from 'react-native'
import React from 'react'
import {OffersNearYouList} from '../../data/offersNearYou'
import FoodItemCard from '../molecules/Cards/FeaturedItemCard'
import SectionHeader from '../molecules/SectionHeader'
import {useNavigation} from '@react-navigation/native'

const OffersNearYou = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-col gap-y-3">
      <SectionHeader
        title="Offers Near You"
        subTitle="Why not support your local restaurant tonight!"
        onTouchLink={() => navigation.navigate('Offers')}
      />
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

export default OffersNearYou
