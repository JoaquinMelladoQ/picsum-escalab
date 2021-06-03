import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import colors from '../../configs/colors';

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  photoBoxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoBoxCircle: {
    width: width * 0.6, 
    height: height * 0.6,
    borderWidth: 5,
    borderColor: colors.silver,
    borderRadius: 200,
  },
});

const CameraInterface = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.photoBoxContainer}>
          <View style={styles.photoBoxCircle}>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CameraInterface;
