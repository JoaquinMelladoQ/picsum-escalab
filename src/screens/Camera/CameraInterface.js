import React from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  photoBoxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTopButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    padding: 5,
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

const CameraInterface = ({ camera, takePhotoFromCamera }) => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTopButton}>
          <TouchableOpacity
            onPress={() => {}}>
            <IconDesign 
              name="setting" 
              color={colors.gray} 
              size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.pop()}>
            <Icon 
              name="close" 
              color={colors.gray} 
              size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.photoBoxContainer}>
          <View style={styles.photoBoxCircle}>
          </View>
          <View style={styles.bottomButtons}>
            <TouchableOpacity 
              style={styles.captureButtonContainer}
              onPress={() => takePhotoFromCamera(camera)}>
              <View style={styles.captureInnerButtonContainer} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CameraInterface;
