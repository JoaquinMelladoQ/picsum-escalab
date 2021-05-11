import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator headerMode="none" >
      <HomeStack.Screen name="home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
