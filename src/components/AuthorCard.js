import React from 'react';
import { 
  StyleSheet, 
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
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
    backgroundColor: 'transparent',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    color: colors.midnightBlue,
    marginVertical: 10,
    fontSize: 20,
  },
});

const AuthorCard = ({ author, download_url, id }) => {
  const routes = { download_url, author }
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.containerText}
          onPress={() => navigation.navigate('ImageList', {
            download_url,
            author,
          })}>
          <View key={id}>
            <Image 
              source={{ uri: download_url }}
              resizeMode="cover"
              style={{ alignSelf: 'stretch', height: 200, width: 160, borderRadius: 20, borderWidth: 2 }}
            />
          </View>
          <Text style={styles.text}>
            {author}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default AuthorCard;
