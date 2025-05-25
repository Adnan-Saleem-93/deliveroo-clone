import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity, View} from 'react-native'
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid'

const BackButton = ({classes}) => {
  const navigation = useNavigation()
  return (
    <View className={`${classes}`}>
      <TouchableOpacity
        className={`bg-slate-50 rounded-full p-1 shadow-slate-600 shadow-lg flex items-center justify-center w-12 h-12`}
        onPress={() =>
          navigation?.canGoBack ? navigation?.goBack() : navigation?.navigate('Home')
        }
      >
        <ArrowLongLeftIcon color="#808080" size={32} />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
