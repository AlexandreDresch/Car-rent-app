import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import theme from '../../global/themes/theme';

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;
  background-color: #29292E;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.primary_500,
    color: theme.colors.shape,
    fontSize: theme.fontSize.medium,
  }
});
