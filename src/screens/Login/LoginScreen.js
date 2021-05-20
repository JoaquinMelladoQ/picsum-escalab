import React, { useEffect }from 'react';
import {
  StyleSheet, 
  View,
  Text,
  ImageBackground,
} from 'react-native';
import colors from '../../configs/colors';
import LoginButton from './buttons/LoginButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
  containerWelcomeText: {
    marginTop: '30%',
    paddingVertical: '35%',
  },
  textWelcome: {
    fontWeight: 'bold',
    color: colors.freshWhite,
    fontSize: 30,
    textAlign: 'center',
  },
});

const Login = () => {

  const image = { uri: 'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80' }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1015796333091-4336ruefhpj8k97uvk9r8is1jtalskma.apps.googleusercontent.com',
    });
  }, [])

  return (
    <>
        <View style={styles.main}>
          <ImageBackground 
            source={image}
            style={styles.mainImage}
            blurRadius={15}>
            <View style={styles.containerWelcomeText}>
              <Text style={styles.textWelcome}>Te damos la bienvenida a Picsum</Text>
            </View>
              <LoginButton />
          </ImageBackground>
        </View>
    </>
  );
};

export default Login;
