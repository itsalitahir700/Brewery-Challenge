import { service } from "../../services/Brewery";

const getAutoComplete = async (search) => {
  try {
    const resp = await service.getAutoComplete(search);
    return resp.data;
  } catch (error) {
    return false;
  }
};

const getBreweryByName = async (name) => async (dispatch) => {
  try {
    const resp = await service.getBreweryByName(name);
    dispatch({
      type: "BREWERY_SUCCESS",
      payload: resp.data,
    });
    return resp.data;
  } catch (error) {
    dispatch({
      type: "BREWERY_ERROR",
      error,
    });
  }
};

const getBrewery = async (id) => async (dispatch) => {
  try {
    const resp = await service.getBrewery(id);
    dispatch({
      type: "BREWERY_DETAILS_SUCCESS",
      payload: resp.data,
    });
    return resp.data;
  } catch (error) {
    dispatch({
      type: "BREWERY_DETAILS_ERROR",
      error,
    });
  }
};

export { getBreweryByName, getBrewery, getAutoComplete };
