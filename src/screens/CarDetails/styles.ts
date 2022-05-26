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
  },
  content: {
    padding: 24,
    alignItems: 'center'
  },
  details: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 38
  },
  brand: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.text_detail,
    fontSize: theme.fontSize.small,
    textTransform: 'uppercase',
  },
  carName: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.title,
    fontSize: theme.fontSize.large,
  },
  period: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.text_detail,
    fontSize: theme.fontSize.small,
    textTransform: 'uppercase',
  }, 
  price: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.main,
    fontSize: theme.fontSize.large,
  },
  about: {
    fontFamily: theme.fonts.primary_400,
    color: theme.colors.text,
    fontSize: theme.fontSize.medium,
    textAlign: 'justify',
    marginTop: 23
  }
});