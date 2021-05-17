import { 
  LOGIN,
  LOGOUT,
} from '../types/';

const INITIAL_STATE = {
  valid: undefined,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, valid: true };
    case LOGOUT:
      return { ...state, valid: false };
    default:
      return state;
  }
};

export default login;
