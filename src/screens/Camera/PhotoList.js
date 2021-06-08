import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../../configs/colors';
import { useUserInformation } from '../../contexts/user/UserHandler';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue
  },
  imageStyles: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  openGalleryContainer: {
    backgroundColor: colors.summerSky, 
    borderRadius: 25, 
    padding: 5, 
    marginTop: 10
  },
  textGallery: {
    color: colors.freshWhite, 
    fontSize: 18, 
    fontWeight: 'bold',
  },
});

const PhotoList = () => {
  const { photo, setPhoto } = useUserInformation();
  const navigation = useNavigation();

  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setPhoto(image.path)
      navigation.navigate('Profile')
    });
  };
  
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        onPress={choosePhotoFromGallery}>
        { 
          photo ? (
          <Image 
            source={{ uri: photo }}
            style={styles.imageStyles}
          />
          ) : (
            <Image 
              source={require('../../assets/no-avatar.jpeg')}
              style={styles.imageStyles}
            />
          )  
        }
      </TouchableHighlight>
      <TouchableOpacity 
        style={styles.openGalleryContainer}
        onPress={choosePhotoFromGallery}>
        <Text style={styles.textGallery}>Abrir galeria</Text>
      </TouchableOpacity>
    </View>
  )
};

export default PhotoList;
