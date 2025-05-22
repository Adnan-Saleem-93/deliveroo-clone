import {TouchableOpacity, View} from 'react-native'

import DeliverooLogo from '../atoms/DeliverooLogo'
import {ArrowLongLeftIcon} from 'react-native-heroicons/outline'

import {useNavigation} from '@react-navigation/native'

const AlternateHeader = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-col gap-y-4 px-4 pb-4 bg-white">
      <View className="flex-row items-center justify-between w-full gap-x-2">
        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLongLeftIcon color="#808080" strokeWidth={3} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AlternateHeader
