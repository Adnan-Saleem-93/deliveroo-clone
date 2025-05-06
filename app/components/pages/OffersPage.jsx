import {View, Text} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

const OffersPage = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <View>
        <Text>OffersPage</Text>
      </View>
    </HomeTemplate>
  )
}

export default OffersPage
