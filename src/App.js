import "./App.css";
import { Button, Container } from "react-bootstrap";
import Departments from "./compents/departments/Departments";
import Teacher from "./compents/teacher/Teacher";
import Course from "./compents/courses/Course";

function App() {
  return (
    <div className="App">
      <Departments />
      <h1>
        <u>Teacher List</u>
      </h1>
      <Teacher />
      <Course />
    </div>
  );
}

export default App;
