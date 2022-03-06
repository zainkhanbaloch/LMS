import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearResult,
  clearStudent,
  getResult,
  getStudent,
} from "../../redux/actions/entryTestActions";
import "./style.css";

import NotFound from "../../assets/notfound.gif";

const Result = (props) => {
  const { result, student, clearResult, clearStudent, getStudent, getResult } = props;

  useEffect(() => {
    getStudent();
    getResult();
  }, [getStudent, getResult])

  let navigate = useNavigate();

  const [res, setRes] = useState([]),
    [total_result, setTotalResult] = useState({
      total: 0,
      percentage: 100,
      gained_percentage: 0,
      gained_marks: 0,
    });

  useEffect(() => {
    if (result) {
      let tempRes = result;
      let total = 0,
        gained_marks = 0;
      tempRes.map((i) => {
        let correct = 0;
        correct = i.questions.filter(
          (i) => i.student_answer && i.student_answer === i.answer
        ).length;
        i.correct = correct;
        gained_marks += correct;
        total += i.questions.length;
        return i;
      });

      let gained_percentage = ((gained_marks * 100) / total).toFixed(2);
      if (gained_percentage.toString().includes(".00"))
        gained_percentage = gained_percentage.replace(".00", "");

      setTotalResult({
        total,
        gained_marks,
        gained_percentage,
        percentage: 100,
      });
      setRes(tempRes);
    }
  }, [result]);

  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center result-wrapper">
      <div className="result-form col-lg-6 col-md-9 col-12 d-flex flex-column">
        {result && student ? (
          <>
            <h1>{student.name} Result</h1>
            <div className="line"></div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-row align-items-center"
            >
              <div className="col-6">
                <h1
                  style={{
                    fontSize: "16px",
                    marginTop: "12px",
                    marginBottom: "12px",
                  }}
                >
                  Subject
                </h1>
              </div>
              <div className="col-6 d-flex flex-row justify-content-end">
                <h1
                  style={{
                    fontSize: "16px",
                    marginTop: "12px",
                    marginBottom: "12px",
                  }}
                >
                  Marks
                </h1>
              </div>
            </div>
            <div className="line"></div>
            {res &&
              res.length > 0 &&
              res.map((i, k) => {
                return (
                  <div
                    style={{ width: "100%" }}
                    key={k}
                    className="d-flex flex-row align-items-center"
                  >
                    <div className="col-6">
                      <h1 style={{ fontSize: "14px" }}>{i.type}</h1>
                    </div>
                    <div className="col-6 d-flex flex-row justify-content-end">
                      <h1 style={{ fontSize: "14px" }}>
                        {i.correct} / {i.questions.length}
                      </h1>
                    </div>
                  </div>
                );
              })}
            <div className="line"></div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-row align-items-center"
            >
              <div className="col-6">
                <h1 style={{ fontSize: "14px" }}>Total</h1>
              </div>
              <div className="col-6 d-flex flex-row justify-content-end">
                <h1 style={{ fontSize: "14px" }}>
                  {total_result.gained_marks} / {total_result.total}
                </h1>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-row align-items-center"
            >
              <div className="col-6">
                <h1 style={{ fontSize: "14px" }}>Percentage</h1>
              </div>
              <div className="col-6 d-flex flex-row justify-content-end">
                <h1 style={{ fontSize: "14px" }}>
                  {total_result.gained_percentage}%
                </h1>
              </div>
            </div>
            <button
              onClick={(e) => {
                clearResult();
                clearStudent();
                navigate("/student/details");
              }}
              type="button"
              style={{
                marginLeft: "auto",
                marginRight: "24px",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              Close
            </button>
          </>
        ) : (
          <>
            <div
              style={{
                margin: "36px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={NotFound}
                alt="Not Found"
                style={{ width: "250px", height: "250px" }}
              />
              <h1
                style={{
                  margin: "0px",
                  fontSize: "14px",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Student result not available
              </h1>
            </div>
            <button
              type="button"
              onClick={(e) => {
                navigate("/student/details");
              }}
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                marginRight: "24px",
                marginLeft: "auto",
              }}
            >
              Register here
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.Result.data,
    student: state.Student.data,
  };
};

export default connect(mapStateToProps, {
  clearResult,
  clearStudent,
  getStudent,
  getResult
})(Result);
