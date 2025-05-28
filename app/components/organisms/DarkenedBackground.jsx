import {View} from 'react-native'
import React from 'react'
import {useModalStore} from '../../store/modal'

const DarkenedBackground = () => {
  const {showModal} = useModalStore()
  return showModal && <View className={'absolute top-0 w-screen h-screen bg-black/70'} />
}

export default DarkenedBackground
