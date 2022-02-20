import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDetails from "./pages/student-details";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Routes>
      <Route path="/student/details" element={<StudentDetails />} />
      <Route path="*" element={<Navigate to={"/student/details"} />} />
    </Routes>
  );
}

export default App;
