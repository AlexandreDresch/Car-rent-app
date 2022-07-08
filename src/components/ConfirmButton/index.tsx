import { Text } from 'react-native';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { styles, Container } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function ConfirmButton({ title, ...rest }: Props){
  return (
    <GestureHandlerRootView>
    <Container {...rest}>
        <Text style={styles.title}>
            {title}
        </Text>
    </Container>
    </GestureHandlerRootView>
  );
}