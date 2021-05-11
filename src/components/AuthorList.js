import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList,
  SafeAreaView,
} from 'react-native';
import AuthorCard from './AuthorCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AuthorList = ({ data }) => {
  console.log({ data });

  const authorFiltered = () => {
    const resultAuthorFiltered = data.map(arrayData => arrayData.author)
    //console.log(resultAuthorFiltered);
  };
  authorFiltered();

  const urlFiltered = data.map(d => d.url)
  //console.log(urlFiltered);
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: {
            url,
            author,
          }
        }) => {
          return (
            <AuthorCard 
              url={url}
              author={author}
            />
          )
        }}
      />
    </SafeAreaView>
  );
};

export default AuthorList;
