import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

export function Accessory({ name, icon: Icon }: Props){
  return (
    <View style={styles.container}>
        <Icon
            width={32}
            height={32}
        />
        <Text style={styles.name}>
            {name}
        </Text>
    </View>
  );
}