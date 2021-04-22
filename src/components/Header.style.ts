import { StyleSheet} from 'react-native'
import colors from '../styles/colors'

export const getStyles = () => StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.red
  },
  title: {
      color: colors.white,
      fontSize: 17,
  }
})
