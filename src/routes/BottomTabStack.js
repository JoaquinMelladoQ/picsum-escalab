import React from 'react';
import { 
  View, 
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack.js';
import colors from '../configs/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Camera from '../screens/Camera/Camera';
import PhotoList from '../screens/Camera/PhotoList';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <BottomTabs.Screen 
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            Icon.loadFont();
            const iconSize = focused ? 35 : 25;
            const color = focused ? colors.midnightBlue : colors.gray
            return (
              <View style={styles.icon}>
                <Icon name="home" color={color} size={iconSize} />
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen 
        name="camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused }) => {
            MaterialIcon.loadFont();
            const iconSize = focused ? 35 : 25;
            const color = focused ? colors.midnightBlue : colors.gray
            return (
              <View style={styles.icon}>
                <MaterialIcon name="add-to-photos" color={color} size={iconSize} />
              </View>
            )
          }
        }}
      />
      <BottomTabs.Screen 
        name="PhotoList"
        component={PhotoList}
        options={{
          tabBarIcon: ({ focused }) => {
            Fontisto.loadFont();
            const iconSize = focused ? 35 : 25;
            const color = focused ? colors.midnightBlue : colors.gray
            return (
              <View style={styles.icon}>
                <Fontisto name="photograph" color={color} size={iconSize} />
              </View>
            )
          }
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
