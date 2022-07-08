import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButton, BorderlessButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from '../../global/themes/theme';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <BorderlessButton
        {...rest}
      >
        <MaterialIcons
          name='chevron-left'
          size={24}
          color={color ? color : theme.colors.text}
        />
      </BorderlessButton>
    </GestureHandlerRootView>
  );
}