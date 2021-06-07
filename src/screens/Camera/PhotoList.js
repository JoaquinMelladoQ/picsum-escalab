import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  TouchableHighlight,
} from 'react-native';
import colors from '../../configs/colors';
import { useUserInformation } from '../../contexts/user/UserHandler';
import { useNavigation } from '@react-navigation/core';

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
});

const PhotoList = () => {
  const { photo } = useUserInformation();
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        onPress={() => navigation.navigate('Profile')}>
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
    </View>
  )
};

export default PhotoList;
