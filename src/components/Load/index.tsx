import { ActivityIndicator } from 'react-native';

import theme from '../../global/themes/theme';

export function Load(){
  return (
    <ActivityIndicator 
        color={theme.colors.main}
        size='large'
        style={{ flex: 1 }}
    />
  );
}