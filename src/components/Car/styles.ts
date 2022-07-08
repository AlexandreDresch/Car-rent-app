import { StyleSheet, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import theme from '../../global/themes/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;

  background-color: #FFFFFF;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px
`;

export const styles = StyleSheet.create({
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