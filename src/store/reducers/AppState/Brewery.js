const defaultState = null;
const breweryState = (state = defaultState, action) => {
  switch (action.type) {
    case "BREWERY_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default breweryState;
