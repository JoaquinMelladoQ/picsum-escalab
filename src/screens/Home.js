import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/actions';
import { 
  StyleSheet, 
  SafeAreaView, 
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

  const dispatch = useDispatch();
  const apiReducer = useSelector(store => store.apiReducer.arrayData)

  useEffect(() => (
    dispatch(fetchApi())
  ), [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Dashboard />
        <AuthorList 
          apiReducer={apiReducer} 
        />
      </SafeAreaView>
    </>
  )
};

export default Home;
