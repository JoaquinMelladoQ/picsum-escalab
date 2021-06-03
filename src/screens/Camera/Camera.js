import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import colors from '../../configs/colors';
import CameraInterface from './CameraInterface';

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

const CameraStatus = ({ message }) => {
  <View style={styles.cameraStatusContainer}>
    <Text style={styles.cameraStatusText}>
      { message }
    </Text>
  </View>
};


const Camera = () => {

  return (
  <>
    <SafeAreaView style={styles.container}>
      <RNCamera 
        style={{ flex: 1, height: '100%'}}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      >
        {({ camera, status }) => {
          /*
           *if (status === 'NOT_AUTHORIZED'){
           *  console.log({ status });
           *  return <CameraStatus message="No autorizado" />
           *} 
           *if (status === 'PENDING_AUTHORIZATION'){
           *  console.log({ status });
           *  return <CameraStatus message="Es pendiente" />
           *}
           */
          if (status === 'READY'){
            console.log({ status });
            return <CameraInterface />
          }
        }}
      </RNCamera>
    </SafeAreaView>
  </>
  );
};

export default Camera;
