import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import ImageUrl from './ImageUrl';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

const ImageList = ({ 
  navigation,
}) => {
  const { 
    params: { url }
  } = useRoute();
  //console.log({ url });
   
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.image}>
            <ImageUrl 
              url={url}
              source={{ uri: url }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ImageList;
