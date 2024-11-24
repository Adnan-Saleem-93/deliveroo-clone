import {View} from 'react-native'
import React from 'react'
import {AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline'
import Avatar from '../atoms/Avatar'
import DeliverooLogo from '../atoms/DeliverooLogo'
import CustomTextInput from '../molecules/CustomTextInput'
import CurrentLocation from '../molecules/CurrentLocation'

const HomeScreenHeader = () => {
  return (
    <View className="flex-col gap-y-2">
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
        <CustomTextInput classes="w-[90%]" placeholder="Search Items" />
        <AdjustmentsHorizontalIcon color="#707070" strokeWidth={3} />
      </View>
    </View>
  )
}

export default HomeScreenHeader
