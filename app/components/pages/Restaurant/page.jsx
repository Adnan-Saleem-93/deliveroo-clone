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
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid'
import {getRestaurantById} from '../../../utils/api'
import RestaurantPageLoading from './loading'

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
    // <SafeAreaView style={styles.AndroidSafeArea}>
    <ScrollView
      contentContainerStyle={{paddingBottom: Platform.OS === 'android' ? 50 : 40}}
      className="bg-slate-100"
    >
      <StatusBar barStyle="light-content" />
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

            <View className="p-4 bg-white">
              <Text className="text-3xl font-bold">{restaurantData?.name}</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
    //</SafeAreaView>
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
