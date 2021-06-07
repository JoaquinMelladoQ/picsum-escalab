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
    marginTop: '20%',
    paddingHorizontal: 20,
  },
  titleItems: {
    color: colors.neonBlue,
    fontSize: 18,
    fontWeight: '300', 
    paddingVertical: 2,
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

const DetailsProfile = ({ toggleModal }) => {
  const routes = useRoute();
  const navigation = useNavigation();
  const [info, setInfo] = useState('', routes.params.info);
  const [web, setWeb] = useState('', routes.params.web);
  const [userName, setUserName] = useState('', routes.params.userName);
  const { user: { displayName, email } } = useContext(AuthContext);

  const infoAsyncStorageKey = 'info';
  const webAsyncStorageKey = 'web';
  const userAsyncStorageKey = 'user';

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(infoAsyncStorageKey, JSON.stringify(info))
      await AsyncStorage.setItem(webAsyncStorageKey, JSON.stringify(web))
      await AsyncStorage.setItem(userAsyncStorageKey, JSON.stringify(userName))
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
      const userNameSavedData = JSON.parse(
        await AsyncStorage.getItem(userAsyncStorageKey),
      );
        if (infoSavedData && webSavedData && userNameSavedData) {
          setInfo(infoSavedData)
          setWeb(webSavedData)
          setUserName(userNameSavedData)
        }
    } catch (e) {
      console.log(e);
    }
  };

  const navigateFunction = () => {
    toggleModal(false)
    navigation.navigate('GoToProfile', {
      info,
      web,
      userName
    })
  };

  useEffect(() => {
    storeData();
    getData();
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.containerSaveButton}
        onPress={toggleModal}>
        <Text style={styles.textSave}>Cerrar</Text>
      </TouchableOpacity>
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
      <Text style={styles.titleItems}>Nombre de usuario:</Text>
        <TextInput 
          placeholder={'Ejemplo: @usuario'}
          placeholderTextColor={colors.debilBlue}
          style={styles.textDetail}
          value={userName}
          onChangeText={userName => setUserName(userName)}>
        </TextInput>
      <Text style={styles.titleItems}>Correo electronico:</Text>
      <Text style={styles.textDetail}>{email}</Text>
      <View style={styles.containerSaveButton}>
        <TouchableOpacity 
          onPress={navigateFunction}>
          <Text style={styles.textSave}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsProfile;
