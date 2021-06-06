import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableHighlight,
  Image,
} from 'react-native';
import colors from '../../configs/colors';
import { useUserInformation } from '../../contexts/user/UserHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
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

const PhotoList = () => {
  const { photo } = useUserInformation();
  console.log({ photo });
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        underlayColor={colors.darkBlue}
        style={styles.circleContainer}
        onPress={()=> {}}>
        <Image 
          source={{ uri: photo }}
        />
      </TouchableHighlight>
    </View>
  )
};

export default PhotoList;
