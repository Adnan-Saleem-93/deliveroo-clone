import {Image} from 'react-native'
import DeliverooICON from '../../../assets/Logo-deliveroo.png'
import React from 'react'

const DeliverooLogo = ({classes = ''}) => {
  return <Image source={DeliverooICON} className={`rounded-full w-12 h-12 ${classes}`} />
}

export default DeliverooLogo
