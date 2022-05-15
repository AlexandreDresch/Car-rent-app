
import { View, Text } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { styles } from './styles';

export function CarDetails(){
  return (
    <View style={styles.container}>

        <View style={styles.header}>

            <BackButton 
                onPress={() => {}}
            />

        </View>

        <ImageSlider 
            imagesUrl={['https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/13516/2019-Audi-RS%205-360SpinFrame_13516_032_2400x1800_nologo.png']}
        />

    </View>
  );
}