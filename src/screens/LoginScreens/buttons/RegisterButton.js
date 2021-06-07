import React, { useContext, useState } from 'react';
import { 
  StyleSheet, 
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  View,
  Button,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../configs/colors';
import { AuthContext } from '../../../contexts/firebase/AuthProvider';

const styles = StyleSheet.create({
  registerButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: colors.freshWhite,
    borderRadius: 45,
    alignItems: 'center',
    padding: 15,
    marginBottom: 30,
  },
  registerButtonText: {
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
  containerCerrarButton: {
    paddingBottom: 30, 
    backgroundColor: colors.freshWhite,
  },
});

const RegisterButton = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [modal, setModal] = useState(false);

  const { register } = useContext(AuthContext);

  const toggleModalActive = () => setModal(!modal) 
  return (
    <>
      <TouchableOpacity
        onPress={() => toggleModalActive()}
        style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrate</Text>
      </TouchableOpacity>
      <Modal
        visible={modal}
        animationType="fade">
        <View style={styles.modal}>
          <KeyboardAwareScrollView extraScrollHeight={20}>
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Correo electronico"
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={userEmail => setEmail(userEmail)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Tu contraseña"
                autoCapitalize="none"
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.containerEnterButton}>
              <TouchableOpacity 
                style={styles.enterButton}
                onPress={() => register(email, password)}>
                <Text style={styles.textEnterButton}>Registrate e inicia sesion</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.containerCerrarButton}>
          <Button
            title="Cerrar" 
            onPress={() => toggleModalActive()} />
        </View>
      </Modal>
    </>
  );
};

export default RegisterButton;
