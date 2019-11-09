import { applyMiddleware, compose, createStore } from 'redux';
import { infoReducer } from './reducers';

const INITIAL_STATE = { };
const middleware = [ ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  infoReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
