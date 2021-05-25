import React, { useContext } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {},
});

const GoToProfile = () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Button title="Volver" onPress={() => navigation.pop()}/>
      </View>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </>
  );
};

export default GoToProfile;
