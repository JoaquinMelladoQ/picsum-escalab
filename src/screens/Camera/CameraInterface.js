import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

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
    width: 200, 
    height: 200,
    borderWidth: 5,
    borderColor: colors.darkBlue,
    borderRadius: 200,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '90%',
  },
  captureButtonContainer: {
    width: 60,
    height: 60,
    borderColor: colors.darkBlue,
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
  },
  captureInnerButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 30, 
    borderWidth: 2,
    borderColor: colors.darkBlue,
    backgroundColor: colors.freshWhite,
  },
});

const CameraInterface = ({ camera, takePicture }) => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.photoBoxContainer}>
          <View style={styles.photoBoxCircle}>
          </View>
          <View style={styles.bottomButtons}>
            <TouchableOpacity
              onPress={() => navigation.pop()}>
              <Icon 
                name="keyboard-backspace" 
                color={colors.darkBlue} 
                size={40} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.captureButtonContainer}
              onPress={() => takePicture(camera)}>
              <View style={styles.captureInnerButtonContainer} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconIonicons 
                name="camera-reverse-outline" 
                color={colors.darkBlue} 
                size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CameraInterface;
