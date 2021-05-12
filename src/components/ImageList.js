import React from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  TouchableOpacity,
  Text,
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
    borderRadius: 25,
    backgroundColor: colors.softBlue,
    alignSelf: 'center',
    padding: 10,
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

const ImageList = ({ 
  navigation,
}) => {
  const { 
    params: {  download_url }
  } = useRoute();
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.pop()}>
          <Text style={styles.textButton}>Go back</Text>
        </TouchableOpacity>
        <View style={styles.image}>
          <ImageUrl 
            download_url={download_url}
            source={{ uri: download_url }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ImageList;
