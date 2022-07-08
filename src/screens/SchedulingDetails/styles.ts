import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
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
  accessories: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16
  },
  footer: {
    width: '100%',
    backgroundColor: theme.colors.background_secondary,
    padding: 24,
    paddingBottom: getBottomSpace() + 24,
  },
  rentalPeriod: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.line,
    paddingBottom: 16
  },
  calendarIcon: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.main,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateTitle: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.text_detail,
    fontSize: theme.fontSize.small,
    textTransform: 'uppercase',
  },
  dateValue: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.title,
    fontSize: theme.fontSize.medium,
  },
  rentalPrice: {
    width: '100%',
    marginTop: 16
  },
  rentalPriceLabel: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.text_detail,
    fontSize: theme.fontSize.small,
    textTransform: 'uppercase',
  },
  rentalPriceDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rentalPriceQuota: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.title,
    fontSize: theme.fontSize.medium,
  },
  rentalPriceTotal: {
    fontFamily: theme.fonts.secondary_500,
    color: theme.colors.success,
    fontSize: theme.fontSize.large,
  }
});