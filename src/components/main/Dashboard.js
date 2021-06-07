import React, { useContext, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import colors from '../../configs/colors';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../contexts/firebase/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SearchAuthor from './SearchAuthor';

const styles = StyleSheet.create({
  container: {
    marginTop: '0.5%',
    padding: 20,
    borderRadius: 35,
    marginHorizontal: 20,
    backgroundColor: colors.midnightBlue,
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 12,
    justifyContent: 'center',
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  userAvatar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    alignSelf: 'center',
  }
})

const Dashboard = ({ apiReducer }) => {
  const [modalSearch, setModalSearch] = useState(false);
  const navigation = useNavigation();
  const { user, logout } = useContext(AuthContext);

  const toggleModalSearch = () => setModalSearch(!modalSearch)
  
  Icon.loadFont()
  Fontisto.loadFont()
  return (
    <>
       <View style={styles.container}>
        <View style={styles.button}>
          {
            user === null ? (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', {})}>
                  <Icon 
                    size={30}
                    name="account"
                    color={colors.freshWhite}
                  />
                <Text style={styles.textButton}>Yo</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', {})}>
                  <Icon 
                    size={30}
                    name="account"
                    color={colors.freshWhite}
                  />
                <Text style={styles.textButton}>Yo</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => toggleModalSearch()}>
            <Fontisto
              size={30}
              name="search"
              color={colors.freshWhite}
            />
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={modalSearch}
            animationType="slide">
            <SearchAuthor 
              toggleModalSearch={toggleModalSearch}
              apiReducer={apiReducer}
            />
          </Modal>
        </View>
        <View style={styles.button}>
          <TouchableOpacity 
            onPress={() => logout()}>
            <IconDesign 
              size={30}
              name="logout"
              color={colors.freshWhite}
            />
            <Text style={styles.textButton}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>  
  );
};

export default Dashboard;
