import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import RootNavigation from './routes/Root';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigation />
    </>
  )
};

export default App;
