import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/core';
import ImageUrl from './ImageUrl';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const ImageList = ({ 
  navigation,
}) => {
  const { 
    params: { url } 
  } = useRoute();
  console.log({ url });
  return (
    <SafeAreaView style={styles.container}>
      <ImageUrl 
        url={url}
      />
    </SafeAreaView>
  );
};

export default ImageList;
