import React, { useContext, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Switch,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { ThemeContext } from '../../contexts/Theme';
import { AuthContext } from '../../contexts/firebase/AuthProvider';
import colors from '../../configs/colors';
import { useRoute } from '@react-navigation/core';
import DetailsProfile from './DetailsProfile';
import ChangePhoto from '../Camera/ChangePhoto';
import { useUserInformation } from '../../contexts/user/UserHandler';
import OptionButtons from './OptionButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    paddingVertical: '1%',
    marginTop: '10%',
  },
  containerTitle: {
    padding: 20,
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
  containerEditButton: {
    flexDirection: 'row',
    backgroundColor: colors.softBlue,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: 'center',
  },
  textEdit: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  textCloseButton: {
    color: colors.freshWhite,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDetailsSection: {
    marginTop: '10%',
    backgroundColor: 'transparent',
  },
  infoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.summerSky,
    textAlign: 'center',
  },
  webText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.softBlue,
    textAlign: 'center',
  },
  buttonEditContainer: {
    marginTop: 5,
    backgroundColor: colors.summerSky,
    padding: 5,
    borderRadius: 25,
  },
  textEditButton: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
});

const Profile = () => {
  const { params: { info, web, userName } } = useRoute();
  const { photo } = useUserInformation();
  
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(false);

  const { mainTheme, toggleDarkMode, darkModeEnabled } = useContext(ThemeContext);
  const { user: { photoURL } } = useContext(AuthContext);

  const toggleModal = () => setModal(!modal);
  const toggleModalEditPhoto = () => setModalPhoto(!modalPhoto);

  return (
    <>
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
        <OptionButtons 
          toggleModal={toggleModal}
        />
        <View style={styles.containerDetails}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Editar perfil</Text>
          </View>
          { 
            photoURL ? (
              <TouchableOpacity
                onPress={() => toggleModalEditPhoto()}>
                <Image 
                  style={styles.userAvatar}
                  source={{ uri: photoURL }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                onPress={() => toggleModalEditPhoto()}>
                <Image
                  style={styles.userAvatar}
                  source={
                    photo ? { uri: photo } 
                          : require('../../assets/no-avatar.jpeg')}/>
              </TouchableOpacity>
            ) 
          }
          <Modal
            transparent={true}
            visible={modalPhoto}
            animationType="slide">
            <ChangePhoto 
              toggleModalEditPhoto={toggleModalEditPhoto}
            />
          </Modal>
          <View style={styles.buttonEditContainer}>
            <TouchableOpacity 
              onPress={toggleModalEditPhoto}>
              <Text style={styles.textEditButton}>Editar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerDetailsSection}>
            <Text style={styles.infoText}>{userName}</Text>
            <Text style={styles.infoText}>{info}</Text>
            <Text style={styles.webText}>{web}</Text>
          </View>
         </View>
          <Modal 
            visible={modal}
            animationType="slide">
            <DetailsProfile 
              toggleModal={toggleModal}/>
          </Modal>
      </View>
    </>
  );
};

export default Profile;
