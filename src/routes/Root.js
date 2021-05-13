import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeStack';
import LoginNavigator from './LoginStack';
import { connect } from 'react-redux';

const RootStack = createStackNavigator();

const RootNavigation = ({ isValidLogin }) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        { !isValidLogin ? (<RootStack.Screen name="LoginNavigator" component={LoginNavigator} />) 
        : ( <RootStack.Screen name="HomeNavigator" component={HomeNavigation} /> )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = globalState => {
  return {
    isValidLogin: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps)(RootNavigation);

