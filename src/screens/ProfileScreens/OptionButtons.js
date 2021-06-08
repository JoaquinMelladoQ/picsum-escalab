import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../configs/colors';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  containerSettingButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    marginTop: 5,
    borderRadius: 25,
    paddingBottom: 1,
  },
});

const OptionButtons = ({ toggleModal }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.containerSettingButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon 
            size={32}
            color={colors.summerSky}
            name="back"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}>
          <Icon 
            size={32}
            color={colors.summerSky}
            name="setting"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OptionButtons
