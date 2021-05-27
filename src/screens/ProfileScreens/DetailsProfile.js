import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';
import { AuthContext } from '../../contexts/firebase/AuthProvider';
import { useRoute, useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  titleItems: {
    color: colors.neonBlue,
    fontSize: 18,
    fontWeight: '300', 
    padding: 5,
  },
  textDetail: {
    padding: 5,
    borderRadius: 25,
    backgroundColor: colors.clouds,
    color: colors.midnightBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerSaveButton: {
    backgroundColor: colors.softBlue,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 25,
    padding: 5,
  },
  textSave: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.freshWhite,
    textAlign: 'center',
  },
});

const DetailsProfile = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const [info, setInfo] = useState('', routes.params.info);
  const [web, setWeb] = useState('', routes.params.web);
  const { user: { displayName, email } } = useContext(AuthContext);

  const infoAsyncStorageKey = 'info';
  const webAsyncStorageKey = 'web';

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(infoAsyncStorageKey, JSON.stringify(info))
      await AsyncStorage.setItem(webAsyncStorageKey, JSON.stringify(web))
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const infoSavedData = JSON.parse(
        await AsyncStorage.getItem(infoAsyncStorageKey),
      );
      const webSavedData = JSON.parse(
        await AsyncStorage.getItem(webAsyncStorageKey),
      );
        if (infoSavedData && webSavedData) {
          setInfo(infoSavedData)
          setWeb(webSavedData)
          console.log({ infoSavedData });
          console.log({ webSavedData });
        }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    storeData();
    getData();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titleItems}>Nombre:</Text>
      <Text style={styles.textDetail}>{displayName}</Text>
      <Text style={styles.titleItems}>Info:</Text>
        <TextInput 
          placeholder={'Anade una biografia breve'}
          placeholderTextColor={colors.debilBlue}
          style={styles.textDetail}
          value={info}
          onChangeText={info => setInfo(info)}>
        </TextInput>
      <Text style={styles.titleItems}>Sitio web:</Text>
        <TextInput 
          placeholder={'Anade un enlace a tu sitio'}
          placeholderTextColor={colors.debilBlue}
          style={styles.textDetail}
          value={web}
          onChangeText={web => setWeb(web)}>
        </TextInput>
      <Text style={styles.titleItems}>Correo electronico:</Text>
      <Text style={styles.textDetail}>{email}</Text>
      <View style={styles.containerSaveButton}>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('GoToProfile', {
            info,
            web,
          })}>
          <Text style={styles.textSave}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsProfile;
