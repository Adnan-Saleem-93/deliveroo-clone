import {View, Text} from 'react-native'
import React from 'react'
import Skeleton from '../../atoms/Skeleton'

const LoadingFeaturedRestaurantCategories = () => {
  return (
    <View className="flex gap-y-4">
      {Array.from({length: 3}).map((_, index) => {
        return (
          <View key={`loading-featured-categories-${index + 1}`} className="flex gap-y-2">
            <View className="flex gap-y-2">
              <Skeleton height="h-5" width="w-52" />
              <Skeleton height="h-3" width="w-44" />
            </View>
            <View className="flex-row gap-x-3">
              {Array.from({length: 4}).map((_, idx) => (
                <Skeleton key={`featured-restaurant-loader-${idx + 1}`} width="w-64 h-[16.75rem]" />
              ))}
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default LoadingFeaturedRestaurantCategories
