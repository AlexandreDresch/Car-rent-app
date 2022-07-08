import { Text, ActivityIndicator } from 'react-native';

import { Container, styles } from './styles';

import theme from '../../global/themes/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color, onPress, enabled = true, loading = false }: Props) {
  return (
    <GestureHandlerRootView>
      <Container
        color={color ? color : theme.colors.main}
        onPress={onPress}
        enabled={enabled}
        style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
      >
        {loading ?
          <ActivityIndicator
            color={theme.colors.shape}
          />
          :
          <Text style={styles.text}>
            {title}
          </Text>
        }
      </Container>
    </GestureHandlerRootView>
  );
}