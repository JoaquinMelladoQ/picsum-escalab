import React from 'react';
import { 
  StyleSheet, 
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
  //console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: {
            download_url,
            author,
          }
        }) => {
          return (
            <>
              <AuthorCard 
                author={author}
                download_url={download_url}
              />
            </>
          )
        }}
      />
    </SafeAreaView>
  );
};

export default AuthorList;
