import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {ArrowLongLeftIcon, StarIcon as StarIconSolid} from 'react-native-heroicons/solid'
import {getRestaurantById} from '../../../utils/api'
import RestaurantPageLoading from './loading'
import {ChevronRightIcon} from 'react-native-heroicons/outline'

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

  if (!restaurantData) return null

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 40}}
      className="bg-slate-100"
    >
      <StatusBar barStyle="default" />
      <View>
        <TouchableOpacity
          style={styles.BackArrow}
          onPress={() => (navigation.canGoBack ? navigation.goBack() : navigation.navigate('Home'))}
        >
          <ArrowLongLeftIcon color="#808080" strokeWidth={4} size={32} />
        </TouchableOpacity>
        {isFetchingData ? (
          <RestaurantPageLoading />
        ) : (
          <View className="w-full h-full">
            <Image
              progressiveRenderingEnabled
              src={restaurantData?.imageUrl}
              className="w-full h-72"
            />

            <View className="px-4 py-8 bg-white flex flex-col gap-y-4">
              <Text className="text-3xl font-bold">{restaurantData?.name}</Text>
              <View className="flex flex-row w-full items-center gap-x-3">
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
                <Text className="text-[#9A9A9A] text-xl font-medium">$$</Text>
              </View>

              <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">
                {restaurantData?.short_description}
              </Text>
            </View>

            <View className="border border-gray-200 p-4 bg-white">
              <TouchableOpacity className="flex flex-row justify-between gap-x-4 w-full">
                <Text className="text-xl text-[#353535] font-semibold">Have a food allergy?</Text>
                <ChevronRightIcon color="#94a3b8" strokeWidth={3} />
              </TouchableOpacity>
            </View>

            <View className="p-4 pt-10">
              <Text className="text-2xl text-[#353535] font-bold">
                {restaurantData?.name?.toLowerCase()} recommends
              </Text>
            </View>

            <View className="w-full">
              {restaurantData?.dishes?.map((dish, idx) => {
                return (
                  <TouchableOpacity
                    key={`dish-${idx}`}
                    className="flex flex-row justify-between gap-x-6 border border-gray-200 w-full p-4"
                  >
                    <View className="flex flex-col justify-center gap-y-3 w-1/2">
                      <Text className="text-2xl text-[#353535] font-bold">{dish?.name}</Text>
                      <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">
                        {dish?.short_description}
                      </Text>
                      <Text className="text-xl text-[#9A9A9A] font-semibold line-clamp-2">
                        ${dish?.price}
                      </Text>
                    </View>
                    <View>
                      <Image
                        progressiveRenderingEnabled
                        src={dish?.imageUrl}
                        className="w-40 h-40"
                      />
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
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
