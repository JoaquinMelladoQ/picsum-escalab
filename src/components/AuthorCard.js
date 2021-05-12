import React from 'react';
import { 
  StyleSheet, 
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../configs/colors';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.freshWhite,
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: colors.darkBlue,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    color: colors.freshWhite,
    marginVertical: 10,
    fontSize: 20,
  },
});

const AuthorCard = ({ 
  author, 
  download_url
}) => {

  const routes = { download_url }
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.containerText}
        onPress={() => navigation.navigate('ImageList', {
          download_url
        })}>
          <Text style={styles.text}>{author}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthorCard;
