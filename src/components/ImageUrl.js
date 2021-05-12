import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
} from 'react-native';
import colors from '../configs/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: colors.darkBlue,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

const ImageUrl = ({ url, source }) => {
  //console.log({ url });
  //console.log({ source });

  const newArray = { url } 
  console.log({ newArray });

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
