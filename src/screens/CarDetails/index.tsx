
import { View, Text, ScrollView } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { styles } from './styles';

export function CarDetails(){
  const image = [
    'https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/13516/2019-Audi-RS%205-360SpinFrame_13516_032_2400x1800_nologo.png',
]
  return (
    <View style={styles.container}>

        <View style={styles.header}>

            <BackButton 
                onPress={() => {}}
            />

        </View>

        <View style={styles.carImages}>
          <ImageSlider 
              imagesUrl={image}
          />
        </View>

        <ScrollView 
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.details}>
            <View>

              <Text style={styles.brand}>
                Audi
              </Text>

              <Text style={styles.carName}>
                RS 5
              </Text>
            </View>

            <View>
              <Text style={styles.period}>
                Day
              </Text>

              <Text style={styles.price}>
                $ 500
              </Text>
            </View>

          </View>

          <Text style={styles.about}>
          The Audi RS 5 Sportback delivers performance and everyday usability offering an exhilarating drive. Search inventory. 
          Offers. Horsepower. 444. HP. Torque. 442. lb-ft. 0-60 mph in. 3.8. sec.
          </Text>

        </ScrollView>
    </View>
  );
}