import {TouchableOpacity, View} from 'react-native'
import {AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline'
import Avatar from '../atoms/Avatar'
import DeliverooLogo from '../atoms/DeliverooLogo'
import CustomTextInput from '../molecules/CustomTextInput'
import CurrentLocation from '../molecules/CurrentLocation'
import {useNavigation} from '@react-navigation/native'

const HomeScreenHeader = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-col gap-y-4 px-4 pb-4 bg-white">
      <View className="flex-row items-center justify-between w-full gap-x-2">
        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <DeliverooLogo />
        </TouchableOpacity>

        {/* Location */}
        <CurrentLocation />

        {/* Avatar Image */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Avatar />
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View className="flex-row items-center justify-between w-full gap-x-2">
        <CustomTextInput width="w-[90%]" placeholder="Search Restaurants or Cuisines" />

        <TouchableOpacity>
          <AdjustmentsHorizontalIcon color="#707070" strokeWidth={3} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreenHeader
