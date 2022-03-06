import { Student, Result } from "../constants";

const { ClearStudent, StudentDetail } = Student;
const { ClearResult, StudentResult } = Result;

export const clearStudent = () => (dispatch) => {
  localStorage.removeItem("student");
  localStorage.removeItem("result");
  localStorage.removeItem("question");
  dispatch({
    type: ClearStudent,
  });
};

export const setStudent = (data) => (dispatch) => {
  localStorage.setItem("student", JSON.stringify(data));
  dispatch({
    type: StudentDetail,
    payload: data,
  });
};

export const clearResult = () => (dispatch) => {
  localStorage.removeItem("student");
  localStorage.removeItem("result");
  dispatch({
    type: ClearResult,
  });
};

export const setResult = (data) => (dispatch) => {
  localStorage.setItem("result", JSON.stringify(data));

  dispatch({
    type: StudentResult,
    payload: data,
  });
};

export const getStudent = () => (dispatch) => {
  let data = localStorage.getItem("student");
  if (data) {
    data = JSON.parse(data);
    dispatch({
      type: StudentDetail,
      payload: data,
    });
  }
};

export const getResult = () => (dispatch) => {
  let data = localStorage.getItem("result");
  if (data) {
    data = JSON.parse(data);
    dispatch({
      type: StudentResult,
      payload: data,
    });
  }
};

export const getQuestions = () => {
  let data = localStorage.getItem("question");
  if (data) {
    return (data = JSON.parse(data));
  } else return {
    questions: [],
    currentIndex: 0,
    currentQIndex: 0
  };
};

export const setQuestions = (data) => {
  localStorage.setItem("question", JSON.stringify(data));
};
