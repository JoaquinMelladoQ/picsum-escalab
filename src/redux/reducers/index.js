import { combineReducers } from 'redux';
import loginReducer from './login';

const reducers = combineReducers({
  loginReducer,
});

export default reducers;
