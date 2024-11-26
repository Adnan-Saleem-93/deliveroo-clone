import {View} from 'react-native'
import React from 'react'
import {AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline'
import Avatar from '../atoms/Avatar'
import DeliverooLogo from '../atoms/DeliverooLogo'
import CustomTextInput from '../molecules/CustomTextInput'
import CurrentLocation from '../molecules/CurrentLocation'

const HomeScreenHeader = () => {
  return (
    <View className="flex-col gap-y-4 px-4 pb-4 bg-white">
      <View className="flex-row items-center justify-between w-full gap-x-2">
        {/* Logo */}
        <DeliverooLogo />

        {/* Location */}
        <CurrentLocation />

        {/* Avatar Image */}
        <Avatar />
      </View>

      {/* Search Box */}
      <View className="flex-row items-center justify-between w-full gap-x-2">
        <CustomTextInput width="w-[90%]" placeholder="Search Restaurants or Cuisines" />
        <AdjustmentsHorizontalIcon color="#707070" strokeWidth={3} />
      </View>
    </View>
  )
}

export default HomeScreenHeader
