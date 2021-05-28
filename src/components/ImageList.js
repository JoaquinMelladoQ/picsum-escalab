import React from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import ImageUrl from './ImageUrl';
import colors from '../configs/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.freshWhite
  },
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    backgroundColor: colors.softBlue,
    alignSelf: 'center',
    marginTop: 40,
  },
  textButton: {
    fontSize: 20,
    color: colors.freshWhite,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

const ImageList = ({ navigation }) => {
  const { params: {  download_url, author } } = useRoute();
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageUrl 
            download_url={download_url}
            source={{ uri: download_url }}
            navigation={navigation}
            author={author}
          />
        </View>
      </View>
    </>
  );
};

export default ImageList;
