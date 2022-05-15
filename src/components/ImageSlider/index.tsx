import { Image, View } from 'react-native';
import theme from '../../global/themes/theme';

import { styles } from './styles';

interface ImageIndexProps {
    active: boolean;
}

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl } : Props, { active } : ImageIndexProps){
  return (
    <View style={styles.container}>

        <View style={styles.imageIndexes}>

            <View 
                style={{
                    width: 6, 
                    height: 6,
                    backgroundColor: active ? theme.colors.title : theme.colors.shape,
                    marginLeft: 8,
                    borderRadius: 3
                }} 
                active={false}
            />
            <View 
                {...active} 
                style={{
                    width: 6, 
                    height: 6,
                    backgroundColor: active ? theme.colors.title : theme.colors.shape,
                    marginLeft: 8,
                    borderRadius: 3
                }} 
                active={true}
            />
            <View 
                {...active} 
                style={{
                    width: 6, 
                    height: 6,
                    backgroundColor: active ? theme.colors.title : theme.colors.shape,
                    marginLeft: 8,
                    borderRadius: 3
                }} 
                active={true}
            />
            <View 
                {...active} 
                style={{
                    width: 6, 
                    height: 6,
                    backgroundColor: active ? theme.colors.title : theme.colors.shape,
                    marginLeft: 8,
                    borderRadius: 3
                }} 
                active={true}
            />

        </View>

        <View style={styles.carImageWrapper}>

            <Image 
                style={styles.carImage}
                source={{uri: imagesUrl[0] }}   
                resizeMode='contain' 
            />

        </View>

    </View>
  );
}