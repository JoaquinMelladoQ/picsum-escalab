import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
} from 'react-native';
import colors from '../configs/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.darkBlue,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default class ImageUrl extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { download_url } = this.props;
    return (
      <>
         <View style={styles.container}>
          <Image 
            source={{ uri: download_url }}
            style={styles.image}
            onError={(e) => console.log(e.nativeEvent.error) } 
            resizeMode="cover"
          />
        </View> 
      </>
    );
  };
};
