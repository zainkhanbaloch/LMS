import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStudent } from "../../redux/actions/entryTestActions";
import "./style.css";

const StudentDetailsEntry = (props) => {
  let navigate = useNavigate();
  const { setStudent } = props;

  const [student, setStudentData] = useState({
    name: "",
    dob: "",
    address: "",
    class: "",
    datetime: ""
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (student.class) {
      let datetime = new Date(Date.now());
      if(student.class === '10th') datetime.setMinutes(datetime.getMinutes() + 50)
      else datetime.setMinutes(datetime.getMinutes() + 30)
      let data = student;
      data.datetime = datetime;
      setStudent(data);
      navigate("/student/mcqs");
    }
  };

  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center student-details-wrapper">
      <form
        onSubmit={submitForm}
        className="student-details-form col-lg-4 col-md-8 col-11 d-flex flex-column"
      >
        <h1>Student Information</h1>
        <div className="line"></div>
        <h6>Name</h6>
        <input
          type={"text"}
          placeholder="Student name"
          className="input"
          onChange={(e) => {
            setStudentData({ ...student, name: e.target.value });
          }}
        />
        <h6>Date of Birth</h6>
        <input
          type={"date"}
          className="input"
          required
          onChange={(e) => {
            setStudentData({ ...student, dob: e.target.value });
          }}
        />
        <h6>Address</h6>
        <textarea
          type={"text"}
          className="input"
          rows={3}
          placeholder="Home address"
          style={{ resize: "none" }}
          required
          onChange={(e) => {
            setStudentData({ ...student, address: e.target.value });
          }}
        />
        <h6>Class</h6>
        <div
          className="d-flex flex-row"
          style={{ margin: "12px 24px 0px 24px", width: "100%" }}
        >
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioClass1"
              checked={student.class === "9th"}
              onChange={(e) => {
                setStudentData({ ...student, class: "9th" });
              }}
            />
            <label className="form-check-label" htmlFor="radioClass1">
              9th
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="radioClass2"
              checked={student.class === "10th"}
              onChange={(e) => {
                setStudentData({ ...student, class: "10th" });
              }}
            />
            <label className="form-check-label" htmlFor="radioClass2">
              10th
            </label>
          </div>
        </div>
        <button
          type="submit"
          style={{
            marginLeft: "auto",
            marginRight: "24px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          Take Test
        </button>
      </form>
    </div>
  );
};

export default connect(null, {
  setStudent,
})(StudentDetailsEntry);
