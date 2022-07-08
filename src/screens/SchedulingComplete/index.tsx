import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { styles } from './styles';

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation<any>();

    function handleConfirm() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <LogoSvg
                width={width}
            />

            <View style={styles.content}>
                <DoneSvg
                    width={80}
                    height={80}
                />

                <Text style={styles.title}>
                    All done!
                </Text>

                <Text style={styles.message}>
                    Now you just need to go {'\n'}
                    to the dealership to {'\n'}
                    pick up your vehicle.
                </Text>
            </View>
            <View style={styles.footer}>
                <ConfirmButton
                    title='OK'
                    onPress={handleConfirm}
                />
            </View>
        </View>
    );
}