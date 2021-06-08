import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import AuthorCard from './AuthorCard';
import MasonryList from '@react-native-seoul/masonry-list';

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
    const { apiReducer, color } = this.props;

    return (
      <>
       <SafeAreaView style={styles.container}>
        <MasonryList 
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 1,
            alignSelf: 'stretch'
          }}
          data={apiReducer}
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
                  color={color}
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
