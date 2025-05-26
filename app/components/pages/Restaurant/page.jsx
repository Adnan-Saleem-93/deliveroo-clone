import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  VirtualizedList
} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {StarIcon as StarIconSolid} from 'react-native-heroicons/solid'
import {getRestaurantById} from '../../../utils/api'
import RestaurantPageLoading from './loading'
import RestaurantNotFound from './not-found'
import BackButton from '../../atoms/BackButton'
import HaveFoodAllergy from '../../molecules/HaveFoodAllergy'
import DishItem from '../../molecules/Cards/DishItem'
import {generateUUID} from '../../../utils/helpers'
import EmptySpace from '../../molecules/EmptySpace'

const RestaurantPage = ({route}) => {
  const {_id} = route.params

  const [restaurantData, setRestaurantData] = useState(null)
  const [isFetchingData, setIsFetchingData] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        setIsFetchingData(true)
        const response = await getRestaurantById(_id)
        setRestaurantData(response)
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          setIsFetchingData(false)
        }, 5000)
      }
    })()

    return () => {
      setRestaurantData(null)
    }
  }, [])

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  if (!restaurantData && !isFetchingData) {
    return <RestaurantNotFound />
  }

  const getItem = (data, index) => {
    if (data) return data[index]
    else return null
  }
  const getItemCount = (data) => (data ? data?.length : 0)

  return isFetchingData ? (
    <ScrollView
      contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 40}}
      className="bg-slate-100"
    >
      <RestaurantPageLoading />
    </ScrollView>
  ) : (
    <VirtualizedList
      className="bg-slate-100"
      contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 30}}
      data={restaurantData?.dishes}
      initialNumToRender={4}
      renderItem={({item}) => {
        return (
          <DishItem
            {...item}
            restaurantImageUrl={restaurantData?.imageUrl}
            restaurantName={restaurantData?.name}
          />
        )
      }}
      keyExtractor={({item}) => (item?._id ? item?._id : generateUUID())}
      getItemCount={getItemCount}
      getItem={getItem}
      ListHeaderComponent={
        <View>
          <BackButton classes="absolute top-16 left-4 z-50" />
          <View className="w-full">
            <Image
              progressiveRenderingEnabled
              src={restaurantData?.imageUrl}
              className="w-full h-72"
            />

            <View className="px-4 py-8 bg-white flex flex-col gap-y-4 w-full">
              <Text className="text-3xl font-bold">{restaurantData?.name}</Text>
              <View className="flex flex-row items-center gap-x-3 overflow-hidden">
                <View className="flex flex-row items-center">
                  <StarIconSolid size={24} opacity={0.7} color="#77BD28" />
                  <Text className="text-[#88AC5B] text-xl font-medium">
                    {restaurantData?.rating}
                  </Text>
                </View>
                <View className="h-1.5 w-1.5 bg-[#9A9A9A] rounded-full" />
                <Text className="text-[#9A9A9A] text-xl font-medium">
                  {restaurantData?.category?.title}
                </Text>
                <View className="h-1.5 w-1.5 bg-[#9A9A9A] rounded-full" />
                <Text className="text-[#9A9A9A] text-xl font-medium line-clamp-1">
                  {restaurantData?.address}
                </Text>
              </View>

              <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">
                {restaurantData?.short_description}
              </Text>
            </View>

            <HaveFoodAllergy />

            <View className="p-4 pt-10">
              <Text className="text-2xl text-[#353535] font-bold">Menu</Text>
            </View>
          </View>
        </View>
      }
      ListFooterComponent={<EmptySpace />}
    />
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    position: 'relative'
  },
  BackArrow: {
    position: 'absolute',
    top: 60,
    left: 15,
    backgroundColor: '#f8fafc',
    borderRadius: 50,
    padding: 4,
    zIndex: 100
  }
})

export default RestaurantPage
