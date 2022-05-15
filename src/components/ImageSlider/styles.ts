import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

import theme from '../../global/themes/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  imageIndexes: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 24,
  },
  imageIndex: {
    width: 6,
    height: 6,
    // delete later
    
  },
  carImageWrapper: {
    width: Dimensions.get('window').width,
    height: 132,

    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: 280,
    height: 132
  }
});