import React, { useContext } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../../configs/colors';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../contexts/firebase/AuthProvider';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 35,
    marginHorizontal: 20,
    backgroundColor: colors.midnightBlue,
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    //borderWidth: 1
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
})

const Dashboard = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Profile', {})}>
            <Text style={styles.textButton}>Yo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => logout()}>
            <Text style={styles.textButton}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
