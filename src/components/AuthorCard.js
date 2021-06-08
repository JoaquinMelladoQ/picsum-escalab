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
    backgroundColor: 'transparent',
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
    backgroundColor: 'transparent',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold',
    color: colors.midnightBlue,
    marginVertical: 20,
    fontSize: 25,
    textAlign: 'center',
  },
});

const AuthorCard = ({ author, download_url }) => {
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
          <View>
            <Image 
              source={{ uri: download_url }}
              resizeMode="cover"
              style={{ 
              alignSelf: 'stretch', 
              height: 260, 
              width: 170, 
              borderRadius: 20, 
              }} />
            <Text style={styles.text}>
              {author}
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default AuthorCard;
