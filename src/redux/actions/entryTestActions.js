import { Student } from "../constants";

const { ClearStudent, StudentDetail } = Student;

export const clearStudent = () => (dispatch) => {
  dispatch({
    type: ClearStudent,
  });
};

export const setStudent = (data) => (dispatch) => {
  dispatch({
    type: StudentDetail,
    payload: data,
  });
};
