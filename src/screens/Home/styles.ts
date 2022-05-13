import { StyleSheet } from 'react-native';

import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background_primary,
  },
  header: {
    width: '100%',
    height: 113,

    backgroundColor: theme.colors.header,
    justifyContent: 'flex-end',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  headerContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  totalCars: {
    fontSize: 15,
    fontFamily: theme.fonts.primary_400,
    color: theme.colors.text,
  }
});