import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </>
  )
};

export default App;
