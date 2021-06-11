import { Appearance } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { ColorsType, CustomTheme, FontsType } from './Entities'

import { colors as LightColors, fonts as LightFonts } from './design-tokens-light.json'
import { colors as DarkColors, fonts as DarkFonts } from './design-tokens-dark.json'

const darkScheme = Appearance.getColorScheme() === 'dark'

// Exported for backwards compatibility
const Colors: ColorsType = darkScheme ? DarkColors : LightColors
// @ts-ignore
const Fonts: FontsType = darkScheme ? DarkFonts : LightFonts

const ThemeColors = {
  light: { ...LightColors },
  dark: { ...DarkColors }
}

const ThemeFonts = {
  light: { ...LightFonts },
  dark: { ...DarkFonts }
}

const useCustomTheme = () => {
  const theme = useTheme()
  return (theme as unknown) as CustomTheme
}

export { Colors, Fonts, ThemeColors, ThemeFonts, useCustomTheme }
export * from './Entities'
