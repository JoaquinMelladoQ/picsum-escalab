import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ImageList from '../components/ImageList';
import ImageUrl from '../components/ImageUrl';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator headerMode="none" >
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="ImageList" component={ImageList} />
      <HomeStack.Screen name="ImageUrl" component={ImageUrl} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
