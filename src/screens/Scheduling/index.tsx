import { useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { getPlatformDate } from '../../utils/getPlatformDate';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { CarDTO } from '../../dtos/CarDTO';

import ArrowSvg from '../../assets/arrow.svg'

import theme from '../../global/themes/theme';
import { DateValue, styles } from './styles';

interface RentalPeriod {
    start: number;
    startFormatted: string;
    end: number;
    endFormatted: string;
}

interface Params {
    car: CarDTO
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        })
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            start: start.timestamp,
            end: end.timestamp,
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'MM/dd/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'MM/dd/yyyy'),
        })
    }

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
                    Choose a {'\n'}
                    rental start {'\n'}
                    and end date
                </Text>

                <View style={styles.rentalPeriod}>
                    <View style={styles.dateInfo}>
                        <Text style={styles.dateTitle}>
                            FROM
                        </Text>
                        <DateValue selected={!!rentalPeriod.startFormatted}>
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </View>

                    <ArrowSvg />

                    <View style={styles.dateInfo}>
                        <Text style={styles.dateTitle}>
                            TO
                        </Text>
                        <DateValue selected={!!rentalPeriod.endFormatted}>
                            {rentalPeriod.endFormatted}
                        </DateValue>
                    </View>
                </View>

            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={{
                    paddingBottom: 24
                }}
                showsVerticalScrollIndicator={false}
            >
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title='Confirm'
                    onPress={handleConfirmRental}
                    enabled={!!rentalPeriod.endFormatted}
                />
            </View>

        </View>
    );
}