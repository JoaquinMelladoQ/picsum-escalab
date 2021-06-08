import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../../configs/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { useUserInformation } from '../../contexts/user/UserHandler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentFromData: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.sarawak,
    padding: 20,
    borderRadius: 25,
    borderWidth: 5,
  },
  textContentFromData: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.marineBlue,
  },
  containerLastSection: {
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  confirmContainer: {
    justifyContent: 'center',
  },
  confirmText: {
    marginLeft: '15%', 
    alignItems: 'center', 
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold'
  },
  buttonTicketContainer: {
    marginTop: '10%',
    marginRight: 40,
    backgroundColor: colors.marineBlue,
    padding: 10,
    borderRadius: 25,
    width: '13%',
    alignSelf: 'flex-end',
    margin: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    marginTop: '10%',
    marginLeft: 10,
    backgroundColor: colors.marineBlue,
    padding: 10,
    borderRadius: 25,
    width: '13%',
  },
});

const GoToProfile = () => {
  const navigation = useNavigation();
  const { info, web, userName } = useUserInformation();

  const confirmData = () => {
    navigation.navigate('Profile')
  };
  return (
    <>
      <View style={styles.buttonsContainer}> 
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon 
              name="chevron-back" 
              size={30} 
              color={colors.freshWhite}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.contentFromData}>
          <Text style={styles.textContentFromData}>{info}</Text>
          <Text style={styles.textContentFromData}>{web}</Text>
          <Text style={styles.textContentFromData}>{userName}</Text>
        </View>
      </View>
      <View style={styles.containerLastSection}>
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmText}>
            Confirmar
          </Text>
        </View>
        <View style={styles.buttonTicketContainer}>
          <TouchableOpacity onPress={confirmData}>
            <MaterialIcon 
              name="done" 
              size={30} 
              color={colors.freshWhite}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default GoToProfile;
