import { View, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { styles } from './styles';

export function Home(){
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

      <Car />
    </View>
  );
}