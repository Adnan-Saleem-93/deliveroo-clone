import {Text, TouchableOpacity} from 'react-native'

const RoundButton = ({
  buttonText,
  onPressAction = null,
  disabled = false,
  classes = '',
  textClasses = ''
}) => {
  return (
    <TouchableOpacity
      className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#00CCBC] ${classes}`}
      onPress={() => onPressAction && onPressAction()}
      disabled={disabled}
    >
      <Text className={`text-xl font-extrabold text-white ${textClasses}`}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default RoundButton
