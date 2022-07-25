import { FAILED, REQUEST, SUCCESS } from "../Constants/Constants";

const initialstate = {
  isLoading: false,
  comments: [],
  error: null,
};

export const commentsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        isLoading: false,
        comments: action.payload,
        error: null,
      };
    case FAILED:
      return {
        isLoading: false,
        comments: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
