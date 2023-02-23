import axios from "axios";
import { FETCH_DATA } from "./actionTypes";

export const fetchData = (options) => async (dispatch) => {
  try {
    const response = await axios.request(options);
    dispatch({
      type: FETCH_DATA,
      payload: response.data.hints,
    });
  } catch (error) {
    console.log(error);
  }
};

