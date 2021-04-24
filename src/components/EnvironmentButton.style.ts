import { StyleSheet } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export const getStyles = () => StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontFamily: fonts.text,
    color: colors.heading,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})
