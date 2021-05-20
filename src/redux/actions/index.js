import axios from 'axios';
import {
  GET_API_SUCCESS
} from '../types';

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
