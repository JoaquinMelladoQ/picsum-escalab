import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Modal,
  TouchableOpacity,
} from 'react-native';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  IconsContainer: {
    paddingTop: '20%',
    marginTop: '85%',
    marginLeft: '82%',
    shadowOpacity: 2,
  },
  modalCloseButton: {
    flex: 1, 
    paddingTop: 10, 
    marginTop: '95%', 
    backgroundColor: colors.clouds, 
    borderRadius: 25,
    borderWidth: 2,
  },
  modalCloseButtonText: {
    alignItems: 'center', 
    textAlign: 'center' 
  },
});

const ImageUrlIcons = ({ 
  likeFunction, 
  toggleMessegesModal, 
  toggleShareModal,
  like,
  modal,
  modalToShare,
}) => {
  return (
    <>
      <View style={styles.IconsContainer}>
        <TouchableOpacity
          onPress={likeFunction}>
         <Icon 
           size={55}
           color={ like ? colors.liked : colors.clouds }
           name="heart"
         />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleMessegesModal}>
          <Icon 
            size={55}
            color={colors.clouds}
            name="comment"
          />
          <Modal
            transparent={true}
            visible={modal}
            animationType="slide">
            <View style={styles.modalCloseButton}>
              <TouchableOpacity onPress={toggleMessegesModal}>
                <Text style={styles.modalCloseButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={toggleShareModal}>
          <Icon 
            size={55}
            color={colors.clouds}
            name="share"
          />
          <Modal
            transparent={true}
            visible={modalToShare}
            animationType="fade">
            <View style={styles.modalCloseButton}>
              <TouchableOpacity onPress={toggleShareModal}>
                <Text style={styles.modalCloseButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ImageUrlIcons;
