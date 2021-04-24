import React from 'react'
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { getStyles } from './PlantCardPrimary.style'
import { SvgFromUri } from 'react-native-svg'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  const styles = getStyles()

  return (
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo } width={70} height={70} />
        <Text style={styles.text}>{data.name}</Text>
      </RectButton>
  )
}
