import axios from "axios";
import { FAILED, REQUEST, SUCCESS } from "../Constants/Constants";

export const getAllAction = () => async (dispatch) => {
  dispatch({
    type: REQUEST,
  });
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    dispatch({ type: SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error.message });
  }
};
