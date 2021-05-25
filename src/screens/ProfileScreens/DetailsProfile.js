import React, { useContext } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
} from 'react-native';
import colors from '../../configs/colors';
import { AuthContext } from '../../contexts/firebase/AuthProvider';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  titleItems: {
    color: colors.neonBlue,
    fontSize: 18,
    fontWeight: '300', 
    padding: 5,
  },
  textDetail: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.clouds,
    color: colors.midnightBlue,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const DetailsProfile = () => {
  const { user: { displayName, email } } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titleItems}>Nombre:</Text>
      <Text style={styles.textDetail}>{displayName}</Text>
      <Text style={styles.titleItems}>Info:</Text>
      <TextInput 
        placeholder="Anade una biografia breve"
        placeholderTextColor={colors.debilBlue}
        style={styles.textDetail}>{null}
      </TextInput>
      <Text style={styles.titleItems}>Sitio web:</Text>
      <TextInput 
        placeholder="Anade un enlace a tu sitio"
        placeholderTextColor={colors.debilBlue}
        style={styles.textDetail}>{null}
      </TextInput>
      <Text style={styles.titleItems}>Correo electronico:</Text>
      <Text style={styles.textDetail}>{email}</Text>
    </View>
  );
};

export default DetailsProfile;
