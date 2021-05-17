import {
  GET_API_SUCCESS
} from '../types/';

const INITIAL_STATE = {
  arrayData: [],
};

const api = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_API_SUCCESS:
      return { ...state, arrayData: action.payload }
    default: 
      return state
  }
};

export default api;

