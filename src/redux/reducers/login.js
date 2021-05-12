const defaultState = {
  loading: false,
  valid: undefined,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_IN':
      return {
        ...state,
        valid: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        valid: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.isLoading,
      };
    default:
      return state;
  }
};

export default login;
