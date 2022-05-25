import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background_secondary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'absolute',
    marginTop: getStatusBarHeight() + 18,
    marginLeft: 24
  },
  carImages: {
    marginTop: getStatusBarHeight() + 32
  }
});