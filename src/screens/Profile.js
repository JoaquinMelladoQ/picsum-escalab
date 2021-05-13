import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: '50%', 
    alignItems: 'center',
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>Nombre</Text>
      <Text>Correo</Text>
      <Text>Telefono</Text>
    </View>
  );
};

export default Profile;
