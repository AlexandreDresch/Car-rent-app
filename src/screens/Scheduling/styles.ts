import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/themes/theme';

interface DateValueProps {
  selected: boolean;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.background_secondary,
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
  rentalPeriod: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 32
  },
  dateInfo: {
    width: '30%',
  },
  dateTitle: {
    color: theme.colors.text,
    fontFamily: theme.fonts.secondary_500,
    fontSize: theme.fontSize.small
  },
  content: {
    
  },
  footer: {
    padding: 24,
  }
});

export const DateValue = styled.Text<DateValueProps>`
color: #E1E1E8;
font-family: Inter_500Medium;
font-size: ${RFValue(15)}px;

${({ selected }) => !selected && css`
  border-bottom-width: 1px;
  border-bottom-color: #7A7A80;
  padding-bottom: 5px;
` }
`;