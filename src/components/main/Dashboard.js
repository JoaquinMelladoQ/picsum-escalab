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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 12,
    justifyContent: 'center',
    alignSelf: 'center',
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

  const [validImage, setValidImage] = useState(true);
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
            user === null ? (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', {})}>
                  <Icon 
                    size={30}
                    name="account"
                    color={colors.freshWhite}
                  />
                <Text style={styles.textButton}>Yo</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', {})}>
                  <Icon 
                    size={30}
                    name="account"
                    color={colors.freshWhite}
                  />
                <Text style={styles.textButton}>Yo</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => logout()}>
            <Icon 
              size={30}
              name="logout"
              color={colors.freshWhite}
            />
            <Text style={styles.textButton}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>  
  );
};

export default Dashboard;
