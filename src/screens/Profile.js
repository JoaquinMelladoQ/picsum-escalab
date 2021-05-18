import React, { useContext, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Switch,
  TextInput
} from 'react-native';
import { ThemeContext } from '../contexts/Theme';
import colors from '../configs/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    paddingVertical: '20%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputs: {
    paddingVertical: 15,
  },
  inputsText: {
    backgroundColor: colors.neonBlue,
    borderRadius: 10,
    paddingHorizontal: 5,
    padding: 10,
    margin: 10,
  },
});

const Profile = () => {
  const [text, setText] = useState('');
  const { mainTheme, toggleDarkMode, darkModeEnabled } = useContext(ThemeContext);

  return (
    <>
      <View 
        style={[styles.container, { 
        backgroundColor: mainTheme.backgroundColor, 
        color: mainTheme.color
        }]}>
        <Switch
          trackColor={{ false: colors.freshWhie, true: colors.softBlue }}
          thumbColor={darkModeEnabled ? colors.green : colors.summerSky}
          ios_backgroundColor={colors.green}
          onValueChange={() => toggleDarkMode()}
          value={darkModeEnabled}/>
        <View style={styles.inputs}>
          <Text style={styles.title}>Nombre</Text>
          <TextInput 
            style={styles.inputsText}
            value={text}
          />
          <Text style={styles.title}>Correo</Text>
          <TextInput 
            style={styles.inputsText}
            value={text}
          />
          <Text style={styles.title}>Telefono</Text>
          <TextInput 
            style={styles.inputsText}
            value={text}
          />
        </View>
      </View> 
    </>
  );
};

export default Profile;
