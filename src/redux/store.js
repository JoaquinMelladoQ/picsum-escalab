import {
  createStore, 
  applyMiddleware, 
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/login';
import apiReducer from './reducers/api';

const rootReducer = combineReducers({
  loginReducer,
  apiReducer
});

const composedEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composedEnhancers(applyMiddleware(thunk)));

export default store;
