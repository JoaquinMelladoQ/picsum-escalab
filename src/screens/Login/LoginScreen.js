import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet, View,
  Text,TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { login as loginAction, setLoading } from '../../redux/actions';
import { useNavigation } from '@react-navigation/core';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    margin: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
  titleContainer: {
    backgroundColor: colors.marineBlue,
    borderRadius: 25,
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
    backgroundColor: colors.darkBlue,
    color: colors.freshWhite,
  },
  textInput: {
    width: '65%',
    padding: 10,
    borderWidth: 5,
    color: colors.freshWhite,
    borderColor: colors.freshWhite,
    marginVertical: 10,
    borderRadius: 25,
    fontSize: 19,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: colors.green,
    borderWidth: 5,
    flexDirection: 'row',
    borderRadius: 45,
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  inputFocusBorderColor: {
    borderColor: colors.freshWhite,
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
      <View style={styles.header}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80' }}
          resizeMode="contain"
        />
      </View>
        <View style={styles.inputsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleInput}>Usuario</Text>
          </View>
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
          <View style={styles.titleContainer}>
            <Text style={styles.titleInput}>Password</Text>
          </View>
          <TextInput
            ref={passwordInputRef}
            placeholder="Password"
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
          <TouchableOpacity
            onPress={() => loginCallback()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
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
