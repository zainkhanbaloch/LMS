
import { Result } from "../constants";

const { StudentResult, ClearResult } = Result;

const initial_state = {
  data: null,
};

export const resultReducer = (state = initial_state, action) => {
  switch (action.type) {
    case StudentResult:
      return {
        ...state,
        data: action.payload,
      };

    case ClearResult:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
};
