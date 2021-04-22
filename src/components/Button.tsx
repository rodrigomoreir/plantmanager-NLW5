import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { getStyles } from './Button.style'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  children?: object
  widthButton?: number
}

export function Button({ title, widthButton = 231, children, ...rest }: ButtonProps) {
  const styles = getStyles()

  return (
      <TouchableOpacity style={[styles.button, {width: widthButton}]} activeOpacity={0.7} {...rest}>
          <Text style={styles.title}>{children || title}</Text>
      </TouchableOpacity>
  )
}
