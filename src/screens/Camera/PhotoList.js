import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
} from 'react-native';
import colors from '../../configs/colors';
import { useUserInformation } from '../../contexts/user/UserHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue
  },
});

const PhotoList = () => {
  const { photo } = useUserInformation();
  //console.log({ photo });
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: photo }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
};

export default PhotoList;
