import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {},
})

const AuthorCard = ({ author, url }) => {
  console.log({ author });
  console.log({ url });
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default AuthorCard;
