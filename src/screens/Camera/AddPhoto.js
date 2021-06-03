import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import colors from '../../configs/colors';
import { useUserInformation } from '../../contexts/user/UserHandler';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  addPhotoContainer: {
    borderColor: colors.darkBlue,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFrame: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  circleContainer: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AddPhoto = () => {
  const { photo } = useUserInformation();
  console.log({ photo });
  const ImagePhoto = !photo ? (
    <View style={[styles.addPhotoContainer, styles.imageFrame]}>
      <Text>Sin foto</Text>
    </View>
  ) : (
    <Image source={{ uri: photo }} />
  )
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        underlayColor={colors.darkBlue}
        style={styles.circleContainer}
        onPress={()=> {}}>
        {ImagePhoto}
      </TouchableHighlight>
    </View>
  )
};

export default AddPhoto
