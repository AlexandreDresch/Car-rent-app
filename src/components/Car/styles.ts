import { StyleSheet } from 'react-native';
import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 126,

    backgroundColor: theme.colors.background_secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
  },
  details: {

  },
  brand: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.text_detail,
    fontSize: 10,
    
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.title,
    fontSize: 15,
  },
  about: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 16,
  },
  rent: {
    marginRight: 24,
  },
  period: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.text_detail,
    fontSize: 10,

    textTransform: 'uppercase',
  },
  price: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.main,
    fontSize: 15,
  },
  type: {

  },
  carImage: {
    width: 176,
    height: 85
  }
});