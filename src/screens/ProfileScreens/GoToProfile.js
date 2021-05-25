import React, { useContext } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Button
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const GoToProfile = (props) => {
  const { 
    params: { 
      addInfoDetail, 
      details, 
      info, 
      web 
    } 
  } = useRoute();
  const navigation = useNavigation();
  //console.log({ props });
  //console.log({ addInfoDetail });
  //console.log({ details });
  //console.log({ info });
  //console.log({ web });

  return (
    <>
      <View>
        <Button title="Volver" onPress={() => navigation.pop()}/>
      </View>
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>{info}</Text>
        <Text>{web}</Text>
      </View>
      <View>
        <Button title="Confirmar y guardar" onPress={() => addInfoDetail()}/>
      </View>
    </>
  );
};

export default GoToProfile;
