import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { login as loginAction } from '../../../redux/actions';
import colors from '../../../configs/colors';
import RegisterButton from './RegisterButton';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: colors.summerSky,
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
});

const LoginButton = ({ 
  loginIn, 
  userName, 
  userPassword 
}) => {

  const loginCallback = (user, password) => {
    if (userName && userPassword) {
      loginIn(userName, userPassword);
    }
  };

  return (
    <>
      <View style={styles.buttons}>
        <RegisterButton />
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
