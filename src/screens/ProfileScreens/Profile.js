import React, { useContext, useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Switch,
  Image,
  Button,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { ThemeContext } from '../../contexts/Theme';
import { AuthContext } from '../../contexts/firebase/AuthProvider';
import colors from '../../configs/colors';
import { useNavigation } from '@react-navigation/core';
import DetailsProfile from './DetailsProfile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    paddingVertical: '20%',
  },
  containerTitle: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.neonBlue,
  },
  containerDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  containerEditarButton: {
    backgroundColor: colors.softBlue,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 25,
    padding: 5,
  },
  textEditar: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  content: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: colors.softBlue,
  },
  containerCloseButton: {
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
  },
  closeButton: {
    padding: 30,
  },
  textCloseButton: {
    color: colors.freshWhite,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Profile = () => {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const { mainTheme, toggleDarkMode, darkModeEnabled } = useContext(ThemeContext);
  const { user: { photoURL } } = useContext(AuthContext);

  const toggleModal = () => setModal(!modal);

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
          trackColor={{ false: colors.clouds, true: colors.softBlue }}
          thumbColor={darkModeEnabled ? colors.green : colors.summerSky}
          ios_backgroundColor={colors.green}
          onValueChange={() => toggleDarkMode()}
          value={darkModeEnabled}/>
        <View style={styles.containerDetails}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Editar perfil</Text>
          </View>
          <Image 
            style={styles.userAvatar}
            source={{ uri: photoURL }}
          />
          <View style={styles.containerEditarButton}>
            <TouchableOpacity
              onPress={() => toggleModal()}>
              <Text style={styles.textEditar}>Editar foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerEditarButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('GoToProfile', {})}>
              <Text style={styles.textEditar}>Ver perfil</Text>
            </TouchableOpacity>
          </View>
            <Modal
              visible={modal}
              animationType="slide">
              <View style={styles.content}>
                <Text>Another content from modal</Text>
              </View>
              <View style={styles.containerCloseButton}>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={toggleModal}>
                  <Text style={styles.textCloseButton}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          <DetailsProfile />
        </View>
      </View>
    </>
  );
};

export default Profile;
