import {
  createStore, 
  applyMiddleware, 
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composedEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)));

export default store;
