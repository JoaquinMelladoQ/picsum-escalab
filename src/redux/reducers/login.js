import { 
  LOGIN,
  LOGOUT,
  LOADING,
} from '../types/';

const INITIAL_STATE = {
  loading: false,
  valid: undefined,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        valid: true,
      };
    case LOGOUT:
      return {
        ...state,
        valid: false,
      };
    case LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };
    default:
      return state;
  }
};

export default login;
