import { View, Text, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { styles } from './styles';

export function Home(){
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Day',
      price: 150,
    },
    thumbnail: 'https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/13516/2019-Audi-RS%205-360SpinFrame_13516_032_2400x1800_nologo.png'
  }

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

      <FlatList 
        style={styles.carList}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} /> }
        showsVerticalScrollIndicator={false}
      />
        
      
      
    </View>
  );
}