import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: theme.colors.background_primary
  },
  header: {
    width: '100%',
    height: 325,

    backgroundColor: theme.colors.header,

    justifyContent: 'center',
    padding: 25,
    paddingTop: getStatusBarHeight() + 30,
  },
  title: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.secondary_600,
    fontSize: theme.fontSize.extra_large,
  },
  subtitle: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.secondary_400,
    fontSize: theme.fontSize.medium,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 0
  },
  appointments: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 24
  },
  appointmentsTitle: {
    color: theme.colors.text,
    fontFamily: theme.fonts.primary_400,
    fontSize: theme.fontSize.medium,
  },
  appointmentsQuantity: {
    color: theme.colors.title,
    fontFamily: theme.fonts.primary_500,
    fontSize: theme.fontSize.medium,
  },
  carWrapper: {
    marginBottom: 16,
  },
  carFooter: {
    width: '100%',
    padding: 12,

    marginTop: -10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: theme.colors.background_secondary,
  },
  carFooterTitle: {
    color: theme.colors.text_detail,
    fontFamily: theme.fonts.secondary_500,
    fontSize: theme.fontSize.small,  
  },
  carFooterPeriod: {
    flexDirection: 'row',
  },
  carFooterDate: {
    color: theme.colors.title,
    fontFamily: theme.fonts.primary_400,
    fontSize: theme.fontSize.small_plus,  
  }
});