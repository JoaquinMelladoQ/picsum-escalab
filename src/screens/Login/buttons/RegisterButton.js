import React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity,
  Text 
} from 'react-native';
import colors from '../../../configs/colors';

const styles = StyleSheet.create({
  registerButton: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: colors.freshWhite,
    flexDirection: 'row',
    borderRadius: 45,
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.freshWhite,
  },
});

const RegisterButton = () => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </>
  );
};

export default RegisterButton;
