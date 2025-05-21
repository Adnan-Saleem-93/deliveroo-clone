import {ScrollView, View} from 'react-native'
import React from 'react'
import CategoryCard from '../molecules/Cards/CategoryCard'
import {useState} from 'react'
import {useEffect} from 'react'

import SkeletonCard from '../molecules/Cards/SkeletonCard'
import {getCategories} from '../../utils/api'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getCategoriesAsync = async () => {
    try {
      setIsLoading(true)
      const result = await getCategories()
      if (result) setCategories(result)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
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
        {isLoading
          ? Array.from({length: 5}).map((_, index) => {
              return <SkeletonCard key={index} />
            })
          : categories?.length > 0 &&
            categories?.map((category) => {
              return <CategoryCard key={category?._id} {...category} />
            })}
      </View>
    </ScrollView>
  )
}

export default Categories
