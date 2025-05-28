import React from 'react'
import {View} from 'react-native'

const Skeleton = ({color = 'bg-slate-300', height = 'h-28', width = 'w-28', classes = ''}) => {
  return <View className={`${color} rounded-lg ${height} ${width} animate-pulse ${classes}`}></View>
}

export default Skeleton
