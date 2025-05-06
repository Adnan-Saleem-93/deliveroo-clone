import {View, Text} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

const FeaturedItemsPage = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <HomeTemplate>
      <View>
        <Text>FeaturedItemsPage</Text>
      </View>
    </HomeTemplate>
  )
}

export default FeaturedItemsPage
