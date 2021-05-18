import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  GET_API_SUCCESS
} from '../types';

export const login = ({ user, password }) => {
  return dispatch => {
    setTimeout(() => {
      if (user === 'aaa' && password === 'aaa') {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('password', password);
        dispatch({ type: LOGIN });
      }
    }, 1000);
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const fetchApi = () => async (dispatch, getState) => {
  try {
    const response = await axios.get('https://picsum.photos/v2/list')
    dispatch({
      type: GET_API_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
};
