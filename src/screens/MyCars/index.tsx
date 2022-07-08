import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import { Car } from '../../components/Car';
import { BackButton } from '../../components/BackButton';
import { Load } from '../../components/Load';

import { styles } from './styles';
import theme from '../../global/themes/theme';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<any>();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data)
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
      <View style={styles.header}>
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor='transparent'
        />
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />

        <Text style={styles.title}>
          Your {'\n'}
          appointments {'\n'}
          are here
        </Text>

        <Text style={styles.subtitle}>
          Comfort, safety and practicality
        </Text>
      </View>

      {loading ? <Load /> :

        <View style={styles.content}>
          <View style={styles.appointments}>
            <Text style={styles.appointmentsTitle}>
              Appointments made
            </Text>

            <Text style={styles.appointmentsQuantity}>
              {cars.length}
            </Text>
          </View>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.carWrapper}>
                <Car
                  data={item.car}
                />
                <View style={styles.carFooter}>
                  <Text style={styles.carFooterTitle}>
                    PERIOD
                  </Text>
                  <View style={styles.carFooterPeriod}>
                    <Text style={styles.carFooterDate}>
                      {item.startDate}
                    </Text>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles.carFooterDate}>
                      {item.endDate}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      }
    </View>
  );
}