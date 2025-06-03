import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import * as Progress from 'react-native-progress'

import {XMarkIcon} from 'react-native-heroicons/outline'
import {useCartStore} from '../../store/cart'

import MapView, {Marker} from 'react-native-maps'
import {useNavigation} from '@react-navigation/native'
import {useUserLocationStore} from '../../store/location'

const DeliveryPage = () => {
  const {restaurant} = useCartStore()
  const {navigate} = useNavigation()
  const {latitude, longitude} = useUserLocationStore()

  const handleCloseDeliveryPage = () => {
    navigate('Home')
  }

  return (
    <View className="flex-1 bg-gray-400/80">
      <SafeAreaView className="">
        <View className="p-6 flex-row items-center justify-between">
          <TouchableOpacity onPress={handleCloseDeliveryPage}>
            <XMarkIcon strokeWidth={3} color="#fff" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-slate-100 text-2xl font-semibold">Order Help</Text>
          </TouchableOpacity>
        </View>
        <View className="mx-6 z-[100] -mb-8 bg-white shadow-md rounded-md p-6 gap-y-2">
          <View className="flex-row justify-between">
            <View className="gap-y-2">
              <Text className="text-slate-400/70 text-xl font-semibold">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={{uri: 'https://links.papareact.com/fls'}} className="h-24 w-24" />
          </View>

          <Progress.Bar
            width={180}
            color="#fff"
            indeterminate={true}
            unfilledColor="#9ca3af"
            borderColor="#9ca3af"
            style={{marginTop: 8}}
          />
          <Text className="text-gray-400 text-xl font-semibold">
            Your order {restaurant?.name ? `at ${restaurant?.name}'s` : ''} is being prepared
          </Text>
        </View>
        <MapView
          style={styles.map}
          mapType="mutedStandard"
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker
            coordinate={{
              latitude: restaurant?.lat,
              longitude: restaurant?.long
            }}
            title={restaurant?.name}
            description={restaurant?.short_description}
            identifier="origin"
            pinColor="green"
          />
        </MapView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  }
})

export default DeliveryPage
