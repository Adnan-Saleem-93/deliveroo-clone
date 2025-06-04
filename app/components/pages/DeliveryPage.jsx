import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import * as Progress from 'react-native-progress'

import {PhoneIcon, XMarkIcon} from 'react-native-heroicons/outline'
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
      <SafeAreaView className="flex-1">
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
              <Progress.Bar
                color="#fff"
                indeterminate={true}
                unfilledColor="#9ca3af"
                borderColor="#9ca3af"
                style={{marginTop: 8, marginBottom: 8, width: '100%'}}
              />
            </View>
            <Image source={{uri: 'https://links.papareact.com/fls'}} className="h-24 w-24" />
          </View>

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
        <View className="bg-white flex-row w-full justify-between items-center py-8 px-4 pb-12 -mb-10">
          <View>
            <Text className="text-2xl text-gray-400">Your Rider</Text>
            <Text className="text-2xl font-semibold tracking-[7px]">Joshua</Text>
          </View>
          <TouchableOpacity className="flex-row items-center gap-x-2">
            <PhoneIcon />
            <Text className="text-3xl text-gray-400/80 font-medium">Call</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    // height: '100%',
    flex: 1
  }
})

export default DeliveryPage
