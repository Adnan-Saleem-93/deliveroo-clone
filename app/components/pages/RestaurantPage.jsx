import {View, Text} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import AlternateHeaderTemplate from '../templates/AlternateHeaderTemplate'

const RestaurantPage = ({route}) => {
  const {_id} = route.params

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <AlternateHeaderTemplate>
      <View>
        <Text>{_id}</Text>
      </View>
    </AlternateHeaderTemplate>
  )
}

export default RestaurantPage
