import {Text, TouchableOpacity} from 'react-native'
import React, {useMemo, useState, useEffect} from 'react'
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline'
import * as Location from 'expo-location'
import {useUserLocationStore} from '../../store/location'

const CurrentLocation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [address, setAddress] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const {setUserLocation} = useUserLocationStore()

  useEffect(() => {
    ;(async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})

      if (location?.coords) {
        // Get address from coordinates
        try {
          const [_address] = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          })
          if (_address) {
            setAddress(_address)
          }
          setUserLocation(location.coords.latitude, location.coords.longitude, _address)
        } catch (error) {
          setErrorMsg('Error getting address')
        }
      }
    })()
  }, [])

  const onClickLocation = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const LocationChevronIcon = useMemo(
    () => (isMenuOpen ? ChevronUpIcon : ChevronDownIcon),
    [isMenuOpen]
  )

  const getDisplayAddress = () => {
    if (errorMsg) return 'Location Error'
    if (!address) return 'Loading...'

    const parts = []
    if (address.city) parts.push(address.city)

    return parts.length > 0 ? parts.join(', ') : 'Current Location'
  }

  return (
    <TouchableOpacity className="flex-row items-center gap-x-1" onPress={onClickLocation}>
      <Text className="text-black text-2xl font-bold">{getDisplayAddress()}</Text>
      <LocationChevronIcon color="#707070" strokeWidth={3} />
    </TouchableOpacity>
  )
}

export default CurrentLocation
