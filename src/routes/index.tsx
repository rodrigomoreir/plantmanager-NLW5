import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'
//import { useSafeArea } from 'react-native-safe-area-context'
import { ThemeColors, ThemeFonts } from '../Themes'

const Routes = () => {
  //const safeAreaInsets = useSafeArea()
  const darkMode = useColorScheme() === 'dark'
  const MyTheme: any = {
    dark: darkMode,
    colors: darkMode ? { ...ThemeColors.dark } : { ...ThemeColors.light },
    fonts: darkMode ? { ...ThemeFonts.dark } : { ...ThemeFonts.light },
    //safeAreaInsets
  }

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}

export default Routes
