import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';

import api from '../../services/api';

import { styles } from './styles';
import theme from '../../global/themes/theme';

interface Params {
  car: CarDTO
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  
  const navigation = useNavigation<any>();

  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);
  const [ loading, setLoading ] = useState(false);

  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  async function handleConfirmRental() {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'MM/dd/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'MM/dd/yyyy')
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates,
    })
    .then(() => navigation.navigate('SchedulingComplete'))
    .catch(() => {
      setLoading(false);
      alert('Unable to confirm appointment')    
    })    
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'MM/dd/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'MM/dd/yyyy'),
    })
  }, [])

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

        <View style={styles.rentalPeriod}>
          <View style={styles.calendarIcon}>
            <Feather
              name='calendar'
              size={theme.fontSize.large}
              color={theme.colors.shape}
            />
          </View>

          <View>
            <Text style={styles.dateTitle}>
              FROM
            </Text>

            <Text style={styles.dateValue}>
              {rentalPeriod.start}
            </Text>
          </View>

          <Feather
            name='chevron-right'
            size={theme.fontSize.small}
            color={theme.colors.text}
          />

          <View>
            <Text style={styles.dateTitle}>
              TO
            </Text>

            <Text style={styles.dateValue}>
              {rentalPeriod.end}
            </Text>
          </View>
        </View>

        <View style={styles.rentalPrice}>
          <Text style={styles.rentalPriceLabel}>
            TOTAL
          </Text>

          <View style={styles.rentalPriceDetails}>
            <Text style={styles.rentalPriceQuota}>
              {`$ ${car.rent.price} x${dates.length} daily`}
            </Text>

            <Text style={styles.rentalPriceTotal}>
              {rentTotal}
            </Text>
          </View>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <Button
          title='Rent now'
          color={theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </View>

    </View>
  );
}