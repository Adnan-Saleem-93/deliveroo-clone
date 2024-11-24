import {Image} from 'react-native'
import UserICON from '../../../assets/user.png'
import React from 'react'

const Avatar = ({classes = ''}) => {
  return <Image source={UserICON} className={`rounded-full w-12 h-12 ${classes}`} />
}

export default Avatar
