import {Text, TouchableOpacity} from 'react-native'
import React, {useMemo, useState} from 'react'
import {ChevronDownIcon, ChevronUpIcon} from 'react-native-heroicons/outline'

const CurrentLocation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onClickLocation = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const LocationChevronIcon = useMemo(
    () => (isMenuOpen ? ChevronUpIcon : ChevronDownIcon),
    [isMenuOpen]
  )
  return (
    <TouchableOpacity className="flex-row items-center gap-x-1" onPress={onClickLocation}>
      <Text className="text-black text-2xl font-bold">Current Location</Text>
      <LocationChevronIcon color="#707070" strokeWidth={4} />
    </TouchableOpacity>
  )
}

export default CurrentLocation
