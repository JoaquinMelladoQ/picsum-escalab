import React, { useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Button
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import colors from '../../configs/colors'

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

  return (
    <>
      <View>
        <Button title="Volver" onPress={() => navigation.navigate('Profile', {
          info,
          web,
          userName
        })}/>
      </View>
      <View style={styles.container}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitleText}>Profile</Text>
        </View>
        <View style={styles.contentFromData}>
          <Text>{info}</Text>
          <Text>{web}</Text>
          <Text>{userName}</Text>
        </View>
      </View>
      <View>
        <Button title="Confirmar y guardar" onPress={() => {}}/>
      </View>
    </>
  );
};

export default GoToProfile;
