import React, { Component } from 'react';
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

export default class AuthorList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { data } = this.props;
    return (
      <>
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
      </>
    );
  };
};
