import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarDTO } from '../../dtos/CarDTO';

import { styles } from './styles';


interface Params {
  car: CarDTO
}

export function CarDetails(){
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {
      car,
    })
  }

  return (
    <View style={styles.container}>

        <View style={styles.header}>

            <BackButton 
                onPress={() => navigation.goBack()}
            />

        </View>

        <View style={styles.carImages}>
          <ImageSlider 
              imagesUrl={car.photos}
          />
        </View>

        <ScrollView 
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.details}>
            <View>

              <Text style={styles.brand}>
                {car.brand}
              </Text>

              <Text style={styles.carName}>
                {car.name}
              </Text>
            </View>

            <View>
              <Text style={styles.period}>
                {car.rent.period}
              </Text>

              <Text style={styles.price}>
                $ {car.rent.price}
              </Text>
            </View>

          </View>

          <View style={styles.accessories}>

            {
              car.accessories.map(accessory => (
                <Accessory 
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))              
            }            
            
          </View>

          <Text style={styles.about}>
            {car.about}
          </Text>

        </ScrollView>

      <View style={styles.footer}>
      <Button 
        title='Choose rental period'
        onPress={handleConfirmRental}
      />
      </View>

    </View>
  );
}