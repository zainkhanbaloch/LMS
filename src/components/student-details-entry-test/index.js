import React from "react";
import "./style.css";

const StudentDetailsEntry = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center student-details-wrapper">
      <form className="student-details-form col-lg-4 col-md-8 col-11 d-flex flex-column">
        <h1>Student Information</h1>
        <div className="line"></div>
        <h6>Name</h6>
        <input type={"text"} placeholder="Student name" className="input" />
        <h6>Date of Birth</h6>
        <input type={"date"} className="input" />
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
            />
            <label className="form-check-label" htmlFor="radioClass2">
              10th
            </label>
          </div>
        </div>
        <button type="submit" style={{ marginLeft: "auto", marginRight:'24px', marginTop:'24px', marginBottom:'24px' }}>
          Take Test
        </button>
      </form>
    </div>
  );
};

export default StudentDetailsEntry;
