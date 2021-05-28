import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../configs/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginTop: '95%',
    backgroundColor: colors.clouds
  },
  textCloseButton: {
    alignItems: 'center',
    textAlign: 'center',
  },
});

const SearchAuthor = ({ toggleModalSearch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleModalSearch()}>
        <Text style={styles.textCloseButton}>Cerrar</Text>
      </TouchableOpacity>
      <TextInput 
        placeholder={'Busca un autor'}>
      </TextInput>
    </View>
  );
};

export default SearchAuthor;
