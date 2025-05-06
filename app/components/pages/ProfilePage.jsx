import {View, Text} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import HomeTemplate from '../templates/HomeTemplate'

const ProfilePage = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <View>
        <Text>ProfilePage</Text>
      </View>
    </HomeTemplate>
  )
}

export default ProfilePage
