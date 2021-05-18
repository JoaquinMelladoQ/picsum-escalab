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
  button: {
    //borderWidth: 1
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
})

const Dashboard = ({ logout }) => {
  const navigation = useNavigation();
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(() => ({}), mapDispatchToProps)(Dashboard);
