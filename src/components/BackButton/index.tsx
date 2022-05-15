import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';

import theme from '../../global/themes/theme';

import { styles } from './styles';

interface Props extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({ color, ...rest }: Props){
  return (
    <BorderlessButton 
        style={styles.container}
        {...rest}
    >
        <MaterialIcons
            name='chevron-left'
            size={24}
            color={color ? color : theme.colors.text}
        />
    </BorderlessButton>
  );
}