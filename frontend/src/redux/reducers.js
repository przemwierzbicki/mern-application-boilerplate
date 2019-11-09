const INITIAL_STATE = {
  name: 'przem',
};
export function infoReducer(state = INITIAL_STATE, action) {
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