import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  actionButtons: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: '10%',
  },
  camButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    marginBottom: 9,
  },
  camTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  closeButton: {
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: 'center',
    backgroundColor: colors.summerSky,
    marginBottom: 9,
  },
  closeTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center', 
    textAlign: 'center',
    color: colors.freshWhite,
  },
  icon: {
    paddingRight: 10,
    color: colors.darkBlue,
  },
});

const CameraButtons = ({ toggleModalEditPhoto }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.camButton}
          onPress={() => navigation.navigate('Camera')}>
          <Icon size={20} style={styles.icon} name="camera"/>
          <Text style={styles.camTextButton}>Toma una foto</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.camButton}
          onPress={() => navigation.navigate('PhotoList')}>
          <Icon size={20} style={styles.icon} name="upload"/>
          <Text style={styles.camTextButton}>Sube una foto</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={toggleModalEditPhoto}>
          <Text style={styles.closeTextButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CameraButtons;
