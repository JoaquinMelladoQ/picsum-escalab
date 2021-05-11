import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = () => {
  
  const getDataFromApi = async () => {
    const { data, status } = await axios.get('https://picsum.photos/v2/list');
    console.log({ data });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
};

export default Home;
