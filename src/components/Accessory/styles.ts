import { StyleSheet } from 'react-native';
import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    width: 109,
    height: 92,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background_primary,
    padding: 16,
    marginBottom: 8
  },
  name: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.text,
    fontSize: theme.fontSize.small_plus
  }
});