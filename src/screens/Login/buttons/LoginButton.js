import React, { useState, useRef, useContext } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import colors from '../../../configs/colors';
import RegisterButton from './RegisterButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../../contexts/firebase/AuthProvider';

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: '10%',
    paddingVertical: '10%',
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: colors.summerSky,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 5,
    margin: 5,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  modal: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
  },
  title: {
    fontSize: 20,
    backgroundColor: colors.freshWhite,
  },
  textCerrar: {
    backgroundColor: colors.freshWhite,
  },
  inputsContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
    color: colors.freshWhite,
  },
  textInput: {
    paddingHorizontal: '20%',
    paddingVertical: 10,
    borderWidth: 2,
    color: colors.darkBlue,
    backgroundColor: colors.clouds,
    borderColor: colors.midnightBlue,
    marginVertical: 5,
    borderRadius: 10,
    fontSize: 19,
  },
  inputFocusColor: {
    borderColor: colors.freshWhite,
  },
  containerEnterButton: {
    backgroundColor: colors.freshWhite,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
    paddingBottom: '5%',
  },
  enterButton: {
    backgroundColor: colors.summerSky,
    borderRadius: 25,
    paddingHorizontal: 25,
    padding: 10,
    width: '90%',
    alignItems: 'center',
  },
  textEnterButton: {
    fontWeight: 'bold',
    color: colors.freshWhite,
    fontSize: 20,
    textAlign: 'center',
  },
  fakeGoogleButton: {
    backgroundColor: colors.google,
    borderRadius: 30,
    padding: 15,
    paddingHorizontal: 25,
    width: '90%',
    alignItems: 'center',
  },
  fakeFacebookButton: {
    backgroundColor: colors.facebook,
    borderRadius: 30,
    padding: 15,
    width: '90%',
    alignItems: 'center',
  },
  textOcontainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.freshWhite,
  },
  textO: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const LoginButton = () => {

  const { 
    login, 
    googleLogin,
  } = useContext(AuthContext);

  const [modal, setModal] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [focusNameInput, setFocusNameInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);

  const passwordInputRef = useRef(null);
  const toggleModal = () => setModal(!modal)
  

  const loginCallback = (user, password) => {
    if (userName && userPassword) {
      login(userName, userPassword);
    }
  };

  return (
    <>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => toggleModal()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar sesion</Text>
        </TouchableOpacity>
        <Modal 
          visible={modal}
          animationType="slide">
          <View style={styles.modal}>
            <Text style={styles.title}>Iniciar sesion</Text>
            <Button title="Cerrar" onPress={() => toggleModal()} />
            <KeyboardAwareScrollView extraScrollHeight={20}>
              { Platform.OS === 'android' ? (
                <>
                <View style={styles.containerEnterButton}>
                    <TouchableOpacity 
                      style={styles.fakeGoogleButton}
                      onPress={() => googleLogin()}>
                      <Text style={styles.textEnterButton}>Iniciar sesion con Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerEnterButton}>
                    <TouchableOpacity 
                      style={styles.fakeFacebookButton}
                      onPress={() => {}}>
                      <Text 
                        style={styles.textEnterButton}>
                      Iniciar sesion con Facebook
                      </Text>
                    </TouchableOpacity>
                </View>
                </>
              ) : null }
              <View style={styles.textOcontainer}>
                <Text 
                  style={styles.textO}>
                O ingresa tu correo electronico y contraseña aqui: 
                </Text>
              </View>
              <View style={styles.inputsContainer}>
                <TextInput
                  placeholder="Correo electronico"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={userName}
                  onChangeText={name => setUserName(name)}
                  style={[styles.textInput,focusNameInput && styles.inputFocusColor,]}
                  onFocus={() => setFocusNameInput(true)}
                  onBlur={() => {
                    setFocusNameInput(false);
                    passwordInputRef.current.focus();
                  }}
                />
                <TextInput
                  ref={passwordInputRef}
                  placeholder="Tu contraseña"
                  autoCapitalize="none"
                  value={userPassword}
                  onChangeText={password => setUserPassword(password)}
                  style={[
                    styles.textInput,
                    focusPasswordInput && styles.inputFocusColor,
                  ]}
                  onFocus={() => setFocusPasswordInput(true)}
                  onBlur={() => setFocusPasswordInput(false)}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.containerEnterButton}>
                <TouchableOpacity 
                  style={styles.enterButton}
                  onPress={() => loginCallback()}>
                  <Text style={styles.textEnterButton}>Iniciar sesion</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textOcontainer}>
                <Button  
                  title="Has olvidado tu contraseña?"
                  onPress={() => {}}/>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </Modal>
        <RegisterButton />
      </View>
    </>
  );
};

export default LoginButton;
