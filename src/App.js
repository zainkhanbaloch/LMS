import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDetails from "./pages/student-details";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import MCQTest from "./pages/mcq-test";
import Test from "./pages/result";

function App() {
  return (
    <Routes>
      <Route path="/student/details" element={<StudentDetails />} />
      <Route path="/student/mcqs" element={<MCQTest />} />
      <Route path="/student/result" element={<Test />} />
      <Route path="*" element={<Navigate to={"/student/details"} />} />
    </Routes>
  );
}

export default App;
