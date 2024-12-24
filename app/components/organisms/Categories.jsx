import {ScrollView, View} from 'react-native'
import React from 'react'
import CategoryCard from '../molecules/Cards/CategoryCard'
import {useState} from 'react'
import {useEffect} from 'react'
import {getCategories} from '../../../sanity-studio/sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const getCategoriesAsync = async () => {
    try {
      const result = await getCategories()
      if (result) setCategories(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategoriesAsync()

    return () => {
      setCategories([])
    }
  }, [])

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row items-center gap-x-3">
        {categories.map((category) => {
          return <CategoryCard key={category.id} {...category} />
        })}
      </View>
    </ScrollView>
  )
}

export default Categories
