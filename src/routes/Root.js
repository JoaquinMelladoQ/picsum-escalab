import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeStack';
import LoginNavigator from './LoginStack';
import { AuthContext } from '../contexts/firebase/AuthProvider';
import auth from '@react-native-firebase/auth';
import BottomNavigation from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user)
    if (initializing) setInitializing(false)
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if (initializing) return null;

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        { 
          !user ? ( 
            <RootStack.Screen name="LoginNavigator" component={LoginNavigator} /> 
          ) : ( 
          <>
            <RootStack.Screen
              name="BottomTabNavigator"
              component={BottomNavigation}
            />
          </>
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
//            <RootStack.Screen name="HomeNavigator" component={HomeNavigation} /> 
