import {ScrollView, View} from 'react-native'
import React from 'react'
import {CategoriesList} from '../../data/categories'
import CategoryCard from '../molecules/Cards/CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row items-center gap-x-3">
        {CategoriesList.map((category) => {
          return <CategoryCard key={category.id} {...category} />
        })}
      </View>
    </ScrollView>
  )
}

export default Categories
