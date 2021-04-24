import { StyleSheet, SafeAreaView} from 'react-native'
import colors from '../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import fonts from '../styles/fonts'

export const getStyles = () => StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    color: colors.heading,
    fontSize: 32,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})
