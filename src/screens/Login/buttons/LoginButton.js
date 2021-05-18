import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { connect } from 'react-redux';
import { login as loginAction } from '../../../redux/actions';
import colors from '../../../configs/colors';
import RegisterButton from './RegisterButton';

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 20,
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
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
  },
  title: {
    fontSize: 18,
  },
  inputsContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
    color: colors.freshWhite,
  },
  textInput: {
    width: '65%',
    padding: 5,
    borderWidth: 5,
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
    paddingBottom: '20%',
  },
  enterButton: {
    backgroundColor: colors.summerSky,
    borderRadius: 25,
    padding: 10,
    width: '80%',
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
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.freshWhite,
  },
  textO: {
    fontSize: 20,
    color: colors.darkBlue,
    textAlign: 'center',
  },
});

const LoginButton = ({ 
  loginIn, 
}) => {
  const [modal, setModal] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [focusNameInput, setFocusNameInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);

  const passwordInputRef = useRef(null);
  const toggleModal = () => setModal(!modal)
  

  const loginCallback = (user, password) => {
    if (userName && userPassword) {
      loginIn(userName, userPassword);
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
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerEnterButton}>
              <TouchableOpacity 
                style={styles.fakeGoogleButton}
                onPress={() => {}}>
                <Text style={styles.textEnterButton}>Iniciar sesion con Google</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.containerEnterButton}>
              <TouchableOpacity 
                style={styles.fakeFacebookButton}
                onPress={() => {}}>
                <Text style={styles.textEnterButton}>Iniciar sesion con Facebook</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.textOcontainer}>
            <Text style={styles.textO}>O ingresa tu nombre de usuario y contraseña aqui: </Text>
          </View>
            <View style={styles.inputsContainer}>
              <TextInput
                placeholder="Nombre de usuario"
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
              <TouchableOpacity  
                onPress={() => {}}>
                <Text style={styles.textO}>Has olvidado tu contraseña?</Text>
              </TouchableOpacity>
          </View>
        </Modal>
        <RegisterButton />
      </View>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loginIn: (user, password) => 
    dispatch(loginAction({ user, password })),
  };
};

const mapStateToProps = globalState => {
  return {
    valid: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
