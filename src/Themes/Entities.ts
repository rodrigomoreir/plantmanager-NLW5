import { TextStyle } from 'react-native'
import { EdgeInsets } from 'react-native-safe-area-context'

export interface CustomTheme {
  dark: boolean
  colors: ColorsType
  fonts: FontsType
  safeAreaInsets: EdgeInsets
}

export interface FontsType {
  types: any
  styles: {
    bigTitle: TextStyle
    moderateTitle: TextStyle
    mediumTitle: TextStyle
    modestTitle: TextStyle
    smallTitle: TextStyle
    headerTitleIOS: TextStyle
    headerTitleAndroid: TextStyle
    normalSubtitle: TextStyle
  }
}

export interface ColorsType {
  a120: string
  a240: string
  a360: string
  b120: string
  b240: string
  b360: string
  c100: string
  c200: string
  c300: string
  c400: string
  c500: string
  c600: string
  c700: string
  c800: string
  s100: string
  s200: string
  s300: string
  s400: string
  s500: string
  e120: string
  e360: string
  e480: string
  e240: string
  e720: string
  primaryButton: string
  secondaryButton: string
  primary: string
  elevated: string
  base: string
  divisor: string
  highlight: string
  normal: string
  fill: string
  title: string
  subtitle: string
  description: string
}
