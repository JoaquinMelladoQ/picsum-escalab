import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/ProfileScreens/Profile';
import GoToProfile from '../screens/ProfileScreens/GoToProfile';
import ImageList from '../components/ImageList';
import Camera from '../screens/Camera/Camera';
import CameraButtons from '../screens/Camera/CameraButtons';
import AddPhoto from '../screens/Camera/AddPhoto';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {

  return (
    <HomeStack.Navigator headerMode="none" >
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="ImageList" component={ImageList} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="GoToProfile" component={GoToProfile} />
      <HomeStack.Screen name="CameraButtons" component={CameraButtons} />
      <HomeStack.Screen name="Camera" component={Camera} />
      <HomeStack.Screen name="AddPhoto" component={AddPhoto} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
