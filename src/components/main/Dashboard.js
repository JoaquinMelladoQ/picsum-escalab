import React, { useContext, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
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
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  userAvatar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    alignSelf: 'center',
  }
})

const Dashboard = () => {

  const navigation = useNavigation();
  const { user, login, logout } = useContext(AuthContext);
  
  if (user !== null) {
    const { user: { photoURL, displayName, email } } = useContext(AuthContext);
  };
  
  return (
    <>
       <View style={styles.container}>
        <View style={styles.button}>
          {
            user === null ?
              (
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Profile', {})}>
                  <Text style={styles.textButton}>Yo</Text> 
                </TouchableOpacity>
              ) : (
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Profile', {})}>
                  <Image 
                    style={styles.userAvatar}
                    source={{ uri: user.photoURL }}
                  />
                  <Text style={styles.textButton}>{user.displayName}</Text>
                </TouchableOpacity>
              )
          }
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
