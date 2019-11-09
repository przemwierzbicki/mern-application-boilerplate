import { applyMiddleware, compose, createStore } from 'redux';

// action creator
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    payload: {
      name,
    },
  };
};

// reducer + initial state
const INITIAL_STATE = {
  name: 'przem',
};
function infoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  };
};

// store
// const INITIAL_STORE = { };
// const middleware = [ ];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  infoReducer,
  // INITIAL_STORE,
  // composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
