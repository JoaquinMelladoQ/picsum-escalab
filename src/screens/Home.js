import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import AuthorList from '../components/AuthorList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Home = () => {
  const [data, setData] = useState([]);
  
  const getDataFromApi = async () => {
    const { data, status } = await axios.get('https://picsum.photos/v2/list');
    setData(data);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Log in</Text>
      </TouchableOpacity>
      <View>
        <Text>Photographers</Text>
      </View>
      <AuthorList 
        data={data}
      />
   </SafeAreaView>
  )
};

export default Home;
