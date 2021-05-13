import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOADING,
  LOGIN,
  LOGOUT,
} from '../types';

export const login = ({ user, password }) => {
  return dispatch => {
    dispatch({ type: LOADING, isLoading: true });

    setTimeout(() => {
      if (user === 'p' && password === 'p') {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('password', password);
        dispatch({ type: LOGIN });
      }
      dispatch({ type: LOADING, isLoading: false });
    }, 3000);
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
