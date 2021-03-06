import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import Theme from './contexts/Theme';
import { AuthProvider } from './contexts/firebase/AuthProvider';
import UserHandler from './contexts/user/UserHandler';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Provider store={store}>
        <AuthProvider>
          <Theme>
            <UserHandler>
              <RootNavigation />
            </UserHandler>
          </Theme>
        </AuthProvider>
      </Provider>
    </>
  )
};

export default App;
