import React, { useContext, useState } from 'react';
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
import { useRoute, useNavigation } from '@react-navigation/core';
import DetailsProfile from './DetailsProfile';
import Icon from 'react-native-vector-icons/AntDesign';
import ChangePhoto from '../Camera/ChangePhoto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    paddingVertical: '1%',
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
  containerSettingButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
    borderRadius: 25,
    paddingBottom: 1,
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
});

const Profile = () => {
  const { params: { info, web, userName } } = useRoute();
  const navigation = useNavigation();
  
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(false);

  const { mainTheme, toggleDarkMode, darkModeEnabled } = useContext(ThemeContext);
  const { user: { photoURL } } = useContext(AuthContext);

  const toggleModal = () => setModal(!modal);
  const toggleModalEditPhoto = () => setModalPhoto(!modalPhoto);

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
          <View style={styles.containerSettingButton}>
            <TouchableOpacity
              onPress={() => toggleModal()}>
              <Icon 
                size={32}
                color={colors.summerSky}
                name="setting"
              />
            </TouchableOpacity>
          </View>
        <View style={styles.containerDetailsSection}>
          <Text style={styles.infoText}>{userName}</Text>
        </View>
        <View style={styles.containerDetails}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Editar perfil</Text>
          </View>
          { photoURL ? (
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
                source={require('../../assets/no-avatar.jpeg')}
              />
            </TouchableOpacity>
          ) }
            <Modal
              transparent={true}
              visible={modalPhoto}
              animationType="slide">
              <ChangePhoto 
                toggleModalEditPhoto={toggleModalEditPhoto}
              />
            </Modal>
          <View style={styles.containerDetailsSection}>
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
