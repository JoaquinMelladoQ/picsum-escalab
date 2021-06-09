import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import colors from '../../configs/colors';
import CameraInterface from './CameraInterface';
import { useNavigation } from '@react-navigation/core';
import { useUserData } from '../../contexts/user/UserHandler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  cameraStatusContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: colors.green
  },
  cameraStatusText: {
    fontSize: 20, 
    color: colors.freshWhite
  },
});

const Camera = () => {
  const navigation = useNavigation();
  const { photo, setPhoto } = useUserData();

  const takePhotoFromCamera = async (camera) => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options);
    if (data.uri) {
      setPhoto(data.uri);
      navigation.navigate('Profile');
    }
  };

  return (
  <>
    <SafeAreaView style={styles.container}>
      <RNCamera 
        style={{ flex: 1, height: '100%'}}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}>
        {({ camera, status }) => {
          if (status === 'READY'){
            return (
              <CameraInterface 
                camera={camera} 
                takePhotoFromCamera={takePhotoFromCamera}
              />
            )
          }
        }}
      </RNCamera>
    </SafeAreaView>
  </>
  );
};

export default Camera;
