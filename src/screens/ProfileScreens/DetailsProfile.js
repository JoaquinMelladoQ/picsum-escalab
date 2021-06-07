import React, { useContext } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';
import { AuthContext } from '../../contexts/firebase/AuthProvider';
import { useNavigation } from '@react-navigation/core';
import { useUserInformation } from '../../contexts/user/UserHandler';

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
  const navigation = useNavigation();
  const { user: { displayName, email } } = useContext(AuthContext);
  const { 
    setInfo, 
    setWeb, 
    setUserName,
    info,
    web,
    userName,
  } = useUserInformation();

  const navigateFunction = () => {
    toggleModal(false)
    navigation.navigate('GoToProfile')
  };

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
          onChangeText={textInfo => setInfo(textInfo)}>
        </TextInput>
      <Text style={styles.titleItems}>Sitio web:</Text>
        <TextInput 
          placeholder={'Anade un enlace a tu sitio'}
          placeholderTextColor={colors.debilBlue}
          style={styles.textDetail}
          value={web}
          onChangeText={textWeb => setWeb(textWeb)}>
        </TextInput>
      <Text style={styles.titleItems}>Nombre de usuario:</Text>
        <TextInput 
          placeholder={'Ejemplo: @usuario'}
          placeholderTextColor={colors.debilBlue}
          style={styles.textDetail}
          value={userName}
          onChangeText={textUserName => setUserName(textUserName)}>
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
