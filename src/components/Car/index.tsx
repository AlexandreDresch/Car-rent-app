import { View, Text, Image } from 'react-native';

import GasolineSvg from '../../assets/gasoline.svg';

import { styles } from './styles';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data } : Props){
  return (
    <View style={styles.container}>
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

          <View style={styles.type}>
            <GasolineSvg />
          </View>

        </View>

      </View>

      <Image 
        source={{ uri: data.thumbnail }} 
        style={styles.carImage}  
        resizeMode='contain'
      />

    </View>
  );
}