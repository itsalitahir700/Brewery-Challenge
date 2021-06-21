const defaultState = null;
const breweryDetailsState = (state = defaultState, action) => {
  switch (action.type) {
    case "BREWERY_DETAILS_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default breweryDetailsState;
