import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeStack';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="HomeNavigator" component={HomeNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
