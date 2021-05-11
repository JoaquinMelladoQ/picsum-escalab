import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {},
})

const ImageList = ({ 
  navigation,
}) => {
const { params: { url } } = useRoute();
  //console.log({ url });
  return (
    <View style={styles.container}>
      <Text>ImageList</Text>
    </View>
  );
};

export default ImageList;
