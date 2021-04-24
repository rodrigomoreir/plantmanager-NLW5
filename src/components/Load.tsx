import React from 'react'
import { View } from 'react-native'
import { getStyles } from './Load.style'
import LottieView from 'lottie-react-native'

import loadAnimation from '../assets/load.json'

export function Load() {
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <LottieView source={loadAnimation} autoPlay loop style={styles.animation} />
    </View>
  )
}
