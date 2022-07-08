import { StyleSheet } from 'react-native';
import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.header,
    paddingTop: 96,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80
  },
  title: {
    fontSize: theme.fontSize.extra_large,
    color: theme.colors.shape,
    fontFamily: theme.fonts.secondary_600,
    marginTop: 40
  },
  message: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.text_detail,
    fontFamily: theme.fonts.primary_400,
    textAlign: 'center',
    lineHeight: theme.fontSize.large,
    marginTop: 16
  },
  footer: {
      width: '100%',
      alignItems: 'center',
      marginVertical: 80,
  }
});