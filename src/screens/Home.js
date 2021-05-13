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
import colors from '../configs/colors';
import Dashboard from '../components/main/Dashboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.freshWhite,
  },
});

const Home = () => {
  const [data, setData] = useState([]);
  
  const getDataFromApi = async () => {
    const { data } = await axios.get('https://picsum.photos/v2/list');
    setData(data);
  };

   useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
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
