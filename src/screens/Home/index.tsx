import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { styles, CarList } from './styles';
import theme from '../../global/themes/theme';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
  };

  function handleOpenMyCars() {
    navigation.navigate('MyCars')
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <Text style={styles.totalCars}>
            Total 12 cars
          </Text>
        </View>
      </View>

      { loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      }

      <TouchableOpacity 
        style={styles.schedulesButton}
        onPress={handleOpenMyCars}
        activeOpacity={.7}
      >
        <Ionicons 
          name='ios-car-sport'
          size={32}
          color={theme.colors.shape}
        />
      </TouchableOpacity>
    </View>
  );
}