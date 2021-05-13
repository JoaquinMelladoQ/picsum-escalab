import React, { useState, useRef } from 'react';
import {
  StyleSheet, 
  View,
  TextInput,
  ImageBackground,
} from 'react-native';
import colors from '../../configs/colors';
import LoginButton from './buttons/LoginButton';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  inputsContainer: {
    paddingTop: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: colors.freshWhite,
  },
  textInput: {
    width: '65%',
    padding: 10,
    borderWidth: 5,
    color: colors.darkBlue,
    backgroundColor: colors.clouds,
    borderColor: colors.midnightBlue,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 19,
  },
  inputFocusColor: {
    borderColor: colors.freshWhite,
  },
});

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [focusNameInput, setFocusNameInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);

  const passwordInputRef = useRef(null);

  const image = { uri: 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80' }

  return (
    <>
        <View style={styles.main}>
          <ImageBackground 
            source={image}
            style={styles.mainImage}
            blurRadius={12}
          >
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
              />
              <LoginButton 
                userName={userName}
                userPassword={userPassword}
              />
            </View>
          </ImageBackground>
        </View>
    </>
  );
};

export default Login;
