import React, { useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import colors from '../../configs/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.debilBlue,
    padding: 10,
    marginHorizontal: 90,
    borderRadius: 25,
  },
  mainTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  contentFromData: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginTop: '10%',
    marginLeft: 10,
    backgroundColor: colors.marineBlue,
    padding: 10,
    borderRadius: 25,
    width: '13%',
  },
  textButton: {
    color: colors.freshWhite,
    textAlign: 'center',
  },
});

const GoToProfile = (props) => {
  const { 
    params: { 
      info,
      web,
      userName,
    } 
  } = useRoute();
  const navigation = useNavigation();

  const confirmData = () => {
    navigation.navigate('Profile', {
      info,
      web,
      userName
    })
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={confirmData}>
            <MaterialIcon 
              name="done" 
              size={30} 
              color={colors.freshWhite}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.contentFromData}>
          <Text>{info}</Text>
          <Text>{web}</Text>
          <Text>{userName}</Text>
        </View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitleText}>Profile</Text>
        </View>
      </View>
    </>
  );
};

export default GoToProfile;
