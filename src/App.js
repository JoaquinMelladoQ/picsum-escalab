import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  )
};

export default App;
