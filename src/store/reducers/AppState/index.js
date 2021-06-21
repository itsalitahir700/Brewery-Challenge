import { combineReducers } from "redux";
import breweryState from "./Brewery";
import breweryDetailsState from "./BreweryDetails";
export default combineReducers({
  breweryState,
  breweryDetailsState,
});
