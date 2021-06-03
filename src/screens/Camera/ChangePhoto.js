import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
} from 'react-native';
import colors from '../../configs/colors';
import CameraButtons from './CameraButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10, 
    marginTop: '98%', 
    backgroundColor: colors.swanWhite, 
    borderRadius: 25,
    borderWidth: 2,
    shadowOpacity: 1,
  },
  containerMainTitle: {
    marginTop: 25,
  },
  mainTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
});

const ChangePhoto = ({ toggleModalEditPhoto }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerMainTitle}>
          <Text style={styles.mainTitle}>Cambia tu foto de perfil</Text>
        </View>
        <CameraButtons 
          toggleModalEditPhoto={toggleModalEditPhoto}/> 
      </View>
    </>
  );
};

export default ChangePhoto;
