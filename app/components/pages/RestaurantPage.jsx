import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import AlternateHeader from '../organisms/AlternateHeader'
import {getRestaurantById} from '../../utils/api'
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid'

const RestaurantPage = ({route}) => {
  const {_id} = route.params

  const [restaurantData, setRestaurantData] = useState(null)
  const [isFetchingData, setIsFetchingData] = useState(false)

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
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="bg-slate-100 w-screen h-screen">
        <TouchableOpacity
          style={styles.BackArrow}
          onPress={() => (navigation.canGoBack ? navigation.goBack() : navigation.navigate('Home'))}
        >
          <ArrowLongLeftIcon color="#808080" strokeWidth={4} size={32} />
        </TouchableOpacity>
        <View className="w-full h-full">
          {isFetchingData ? (
            <View className="bg-slate-400 h-64 w-full animate-pulse"></View>
          ) : (
            <Image
              progressiveRenderingEnabled
              src={restaurantData?.imageUrl}
              className="w-full h-64"
            />
          )}

          <View className="p-4">
            {isFetchingData ? (
              <View className="bg-slate-400 h-10 w-60 animate-pulse"></View>
            ) : (
              <Text className="text-3xl font-bold">{restaurantData?.name}</Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    top: 10,
    left: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 50,
    padding: 4,
    zIndex: 100
  }
})

export default RestaurantPage
