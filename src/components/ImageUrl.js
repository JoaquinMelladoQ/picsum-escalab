import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

const ImageUrl = ({ url }) => {
  //console.log({ url });
  return (
    <>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{ uri: url }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

export default ImageUrl;
