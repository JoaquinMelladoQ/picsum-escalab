import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  ImageBackground,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  IconsContainer: {
    paddingTop: '20%',
    marginTop: '95%',
    marginLeft: '82%',
    shadowOpacity: 2,
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
    console.log({ author });

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
                <Text>Autor: {author}</Text>
              </View>
            </View>
            <View style={styles.IconsContainer}>
              <TouchableOpacity
                onPress={this.likeFunction}>
               <Icon 
                 size={55}
                 color={ like ? colors.liked : colors.clouds}
                 name="heart"
               />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.toggleMessegesModal}>
                <Icon 
                  size={55}
                  color={colors.clouds}
                  name="comment"
                />
                <Modal
                  transparent={true}
                  visible={modal}
                  animationType="slide">
                  <View style={{ flex: 1, paddingTop: 10, marginTop: '95%', backgroundColor: colors.freshWhite }}>
                    <TouchableOpacity onPress={this.toggleMessegesModal}>
                      <Text style={{ alignItems: 'center', textAlign: 'center' }}>Cerrar</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={this.toggleShareModal}>
                <Icon 
                  size={55}
                  color={colors.clouds}
                  name="share"
                />
                <Modal
                  transparent={true}
                  visible={modalToShare}
                  animationType="fade">
                  <View style={{ flex: 1, paddingTop: 10, marginTop: '95%', backgroundColor: colors.freshWhite }}>
                    <TouchableOpacity onPress={this.toggleShareModal}>
                      <Text style={{ alignItems: 'center', textAlign: 'center' }}>Cerrar</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View> 
      </>
    );
  };
};
