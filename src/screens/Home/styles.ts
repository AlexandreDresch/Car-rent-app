import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { CarDTO } from '../../dtos/CarDTO';

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
  },  
  schedulesButton: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 13,
    right: 22,

  }
});

export const CarList = styled(FlatList as new () =>FlatList<CarDTO>)
.attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;

