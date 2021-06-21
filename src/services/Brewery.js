import axios from "axios";
import { baseURL } from "../utilities/constants";

const service = {
  getBreweryByName: async (name) => {
    try {
      const response = await axios.get(`${baseURL}search?query=${name}`);
      return response;
    } catch (error) {
      alert(error.msg);
      return false;
    }
  },
  getBrewery: async (id) => {
    try {
      const response = await axios.get(`${baseURL}${id}`);
      return response;
    } catch (error) {
      alert(error.msg);
      return false;
    }
  },
  getAutoComplete: async (search) => {
    try {
      const response = await axios.get(
        `${baseURL}autocomplete?query=${search}`
      );
      return response;
    } catch (error) {
      console.warn(error.msg);
      return false;
    }
  },
};

export { service };
