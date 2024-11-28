import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {StarIcon as StarIconSolid, MapPinIcon} from 'react-native-heroicons/solid'

const FoodItemCard = ({id, text, rating, category, location, img}) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg w-64">
      <Image source={img} className="w-full h-40 rounded-t-lg" />
      <View className="p-3 flex-col gap-y-2">
        {/* Title */}
        <Text className="flex-1 text-xl font-bold line-clamp-1">{text}</Text>

        {/* Rating & Category */}
        <View className="flex-row gap-x-2">
          {/* Rating */}
          <View className="flex-row items-center justify-between gap-x-1">
            <StarIconSolid size={16} opacity={0.7} color="#71a02b" />
            <Text className="text-gray-500">{rating}</Text>
          </View>

          {/* Category */}
          <Text className="line-clamp-1 text-gray-500 italic">- {category}</Text>
        </View>

        {/* Location */}
        <View className="flex-row gap-x-1">
          <MapPinIcon size={16} color="darkgray" />
          <Text className="line-clamp-1 text-gray-500 text-sm">Nearby - {location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FoodItemCard
