import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import Theme from './contexts/Theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Provider store={store}>
        <Theme>
          <RootNavigation />
        </Theme>
      </Provider>
    </>
  )
};

export default App;
