import React, { useContext, useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Switch,
  Image,
  Button
} from 'react-native';
import { ThemeContext } from '../contexts/Theme';
import { AuthContext } from '../contexts/firebase/AuthProvider';
import colors from '../configs/colors';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    paddingVertical: '20%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputs: {
    paddingVertical: 15,
  },
  inputsText: {
    backgroundColor: colors.neonBlue,
    borderRadius: 10,
    paddingHorizontal: 5,
    padding: 10,
    margin: 10,
  },
  containerDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});

const Profile = () => {
  //const [text, setText] = useState('');
  const navigation = useNavigation();
  //const [userName, setUserName] = useState('');
  //const [userEmail, setUserEmail] = useState('');
  //const [userPhoto, setUserPhoto] = useState(null);
  const { mainTheme, toggleDarkMode, darkModeEnabled } = useContext(ThemeContext);

  const { user: { displayName, email, photoURL } } = useContext(AuthContext);
  const { user, login } = useContext(AuthContext);
  //console.log({ user });
  //console.log({ displayName });
  //console.log({ email });
  //console.log({ photoURL });

  //const getUserEmail = () => setUserEmail(email)
  //const getUserName = () => setUserName(displayName)
  //const getUserPhoto = () => setUserPhoto(photoURL)

  useEffect(() => {
    //getUserEmail()
    //getUserName()
    //getUserPhoto()
  }, [])

  return (
    <>
      <View>
        <Button title="Volver" onPress={() => navigation.pop()}/>
      </View>
      <View 
        style={[styles.container, { 
        backgroundColor: mainTheme.backgroundColor, 
        color: mainTheme.color
        }]}>
        <Switch
          trackColor={{ false: colors.freshWhie, true: colors.softBlue }}
          thumbColor={darkModeEnabled ? colors.green : colors.summerSky}
          ios_backgroundColor={colors.green}
          onValueChange={() => toggleDarkMode()}
          value={darkModeEnabled}/>
            <View style={styles.containerDetails}>
              <Image 
                style={styles.userAvatar}
                source={{ uri: photoURL }}
              />
            <Text>Nombre: {displayName}</Text>
            <Text>Correo electronico: {email}</Text>
            <Text>Numero Telefono: {null}</Text>
          </View>
      </View>
    </>
  );
};

export default Profile;
