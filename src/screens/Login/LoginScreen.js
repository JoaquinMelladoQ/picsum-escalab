import React, { useState, useRef } from 'react';
import {
  StyleSheet, View,
  Text,TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { login as loginAction } from '../../redux/actions';
import { useNavigation } from '@react-navigation/core';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.freshWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: colors.marineBlue,
    borderRadius: 15,
    padding: 10,
  },
  titleInput: {
    color: colors.freshWhite,
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputsContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.freshWhite,
    color: colors.freshWhite,
  },
  textInput: {
    width: '65%',
    padding: 10,
    borderWidth: 5,
    color: colors.darkBlue,
    borderColor: colors.darkBlue,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 19,
  },
  buttons: {
    flexDirection: 'row',
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: colors.softBlue,
    //borderWidth: 5,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 42,
    marginBottom: 30,
    margin: 5,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  registerButton: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderWidth: 5,
    flexDirection: 'row',
    borderRadius: 45,
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputFocusBorderColor: {
    borderColor: colors.softBlue,
  },
});

const Login = ({ 
  isLoadingActive, 
  loginIn, 
  valid: validLogin
}) => {
  const [userName, updateUserName] = useState('');
  const [userPassword, updateUserPassword] = useState('');
  const [focusNameInput, updateFocusNameInput] = useState(false);
  const [focusPasswordInput, updateFocusPasswordInput] = useState(false);

  const passwordInputRef = useRef(null);
  const navigation = useNavigation();

  const loginCallback = (user, password) => {
    if (userName && userPassword) {
      loginIn(userName, userPassword);
    }
  };

  return (
    <>
      <View style={styles.main}>
        <Image
          style={styles.mainImage}
          source={{ uri: 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80' }}
          resizeMode="contain"
        />
      </View>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Usuario"
            autoCapitalize="none"
            value={userName}
            onChangeText={name => updateUserName(name)}
            style={[styles.textInput,focusNameInput && styles.inputFocusBorderColor,]}
            onFocus={() => updateFocusNameInput(true)}
            onBlur={() => {
              updateFocusNameInput(false);
              passwordInputRef.current.focus();
            }}
          />
          <TextInput
            ref={passwordInputRef}
            placeholder="Contraseña"
            autoCapitalize="none"
            value={userPassword}
            onChangeText={password => updateUserPassword(password)}
            style={[
              styles.textInput,
              focusPasswordInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusPasswordInput(true)}
            onBlur={() => updateFocusPasswordInput(false)}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => loginCallback()}
              style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => loginCallback()}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loginIn: (user, password) => dispatch(loginAction({ user, password })),
  };
};

const mapStateToProps = globalState => {
  return {
    isLoadingActive: globalState.loginReducer.loading,
    valid: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
