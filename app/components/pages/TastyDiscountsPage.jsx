import {View, Text} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const TastyDiscountsPage = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <View>
        <Text>TastyDiscountsPage</Text>
      </View>
    </HomeTemplate>
  )
}

export default TastyDiscountsPage
