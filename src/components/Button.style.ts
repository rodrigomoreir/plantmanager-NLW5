import { StyleSheet} from 'react-native'
import colors from '../Themes/colors'

export const getStyles = () => StyleSheet.create({
  button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 16,
      height: 56,
  },
  title: {
      color: colors.white,
      fontSize: 17,
  }
})
