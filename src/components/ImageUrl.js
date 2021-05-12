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
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

const ImageUrl = ({ download_url }) => {
  //console.log(download_url);
  return (
    <>
      <View style={styles.container}>
        <Image 
          source={{ uri: download_url }}
          style={styles.image}
          onError={(e) => console.log(e.nativeEvent.error) } 
          resizeMode="cover"
        />
      </View>
    </>
  );
};

export default ImageUrl;
