import { View, Text, Image } from 'react-native';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { styles, Container } from './styles';

import { CarDTO } from '../../dtos/CarDTO';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest } : Props){

  
  return (
    <GestureHandlerRootView>
    <Container {...rest}>
      <View style={styles.details}>
        <Text style={styles.brand}>
          {data.brand}
        </Text>

        <Text style={styles.name}>
          {data.name}
        </Text>

        <View style={styles.about}>
          <View style={styles.rent}>
            <Text style={styles.period}>
              {data.rent.period}
            </Text>

            <Text style={styles.price}>
              {`$ ${data.rent.price}`}
            </Text>
          </View>

        </View>

      </View>

      <Image 
        source={{ uri: data.thumbnail }} 
        style={styles.carImage}  
        resizeMode='contain'
      />

    </Container>
    </GestureHandlerRootView>
  );
}