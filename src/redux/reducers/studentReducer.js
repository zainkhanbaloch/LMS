import { Student } from "../constants";

const { StudentDetail, ClearStudent } = Student;

const initial_state = {
  student: null,
};

export const studentReducer = (state = initial_state, action) => {
  switch (action.type) {
    case StudentDetail:
      return {
        ...state,
        student: action.payload,
      };

    case ClearStudent:
      return {
        ...state,
        student: null,
      };

    default:
      return state;
  }
};
