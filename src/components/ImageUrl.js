import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageUrlIcons from './ImageUrlIcons';

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
  gobackButtonContainer: {
    paddingTop: '10%',
    paddingLeft: '5%'
  },
});

export default class ImageUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false,
      modal: false,
      modalToShare: false,
    };
  }

  likeFunction = () => this.setState(({ like }) =>({ like: !like }))
  toggleMessegesModal = () => this.setState(({ modal }) =>({ modal: !modal }))
  toggleShareModal = () => this.setState(({ modalToShare }) =>({ modalToShare: !modalToShare }))
  
  render() {

    const { download_url, navigation, author } = this.props; 
    const { like, modal, modalToShare } = this.state;

    return (
      <>
       <View style={styles.container}>
        <ImageBackground 
          source={{ uri: download_url }}
          style={styles.image}
          onError={(e) => console.log(e.nativeEvent.error) } 
          resizeMode="cover">
          <View style={styles.gobackButtonContainer}>
            <TouchableOpacity 
              onPress={() => navigation.pop()}>
              <Icon 
                size={30}
                color={colors.clouds}
                name="keyboard-backspace"
              />
            </TouchableOpacity>
            <View>
              <Text>{author}</Text>
            </View>
          </View>
          <ImageUrlIcons 
            likeFunction={this.likeFunction}
            toggleMessegesModal={this.toggleMessegesModal}
            toggleShareModal={this.toggleShareModal}
            like={like}
            modal={modal}
            modalToShare={modalToShare}
          /> 
        </ImageBackground>
       </View> 
      </>
    );
  };
};
