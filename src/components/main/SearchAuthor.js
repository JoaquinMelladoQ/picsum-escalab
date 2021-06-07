import React, { useEffect, useState } from 'react';
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
    backgroundColor: colors.swanWhite,
    borderRadius: 10,
    borderWidth: 1,
    shadowOpacity: 2,
  },
  containerList: {
    paddingHorizontal: '30%',
    paddingVertical: 20,
    borderRadius: 25,
  },
  textList: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.darkBlue,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    borderRadius: 25,
  },
  textInput: {
    textAlign: 'center', 
    padding: 20, 
    fontSize: 20, 
    backgroundColor: colors.silver, 
    marginHorizontal: '10%',
    marginVertical: '5%',
    borderRadius: 25,
  },
  closeButton: {
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: 'center',
    backgroundColor: colors.summerSky,
    marginBottom: 9,
    marginVertical: '20%',
    marginHorizontal: 40,
  },
  closeTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center', 
    textAlign: 'center',
    color: colors.freshWhite,
  },
});

const SearchAuthor = ({ toggleModalSearch, apiReducer }) => {
  const [authors, setAuthors] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  const getDataFromApiReducer = () => {
    const arrayAuthor = apiReducer.map(({ author }) => author)
    const newAuthorArray = new Set(arrayAuthor)
    setAuthors([...newAuthorArray])
  };
  
  const searchByAuthor = (name) => {
    const filter = authors.filter((authorName) => authorName.includes(name))
    setAuthorList(filter)
  };

  useEffect(() => {
    getDataFromApiReducer();
  }, [])

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={'Busca un autor'}
          onChangeText={searchByAuthor}>
        </TextInput>
        <View style={styles.containerList}>
          <TouchableOpacity style={styles.textList}
            onPress={() => {}}>
            <Text style={styles.textList}>
             {authorList}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => toggleModalSearch()}>
          <Text style={styles.closeTextButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchAuthor;
