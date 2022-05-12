import { StyleSheet } from 'react-native';
import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.colors.background_primary,
  },
  title: {
    fontSize: 30,
    fontFamily: theme.fonts.primary_400
  }
});