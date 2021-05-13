import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../../configs/colors';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import { useNavigation } from '@react-navigation/core';

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
  buttonLogout: {
    //borderWidth: 1
  },
  textLogout: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
})

const Dashboard = ({ logout }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonLogout}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Profile', {})}>
            <Text style={styles.textLogout}>Mi perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonLogout}>
          <TouchableOpacity 
            onPress={() => logout()}>
            <Text style={styles.textLogout}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(() => ({}), mapDispatchToProps)(Dashboard);
