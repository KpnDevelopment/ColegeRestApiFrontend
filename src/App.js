import "./App.css";
import Departments from "./compents/departments/Departments";
import Teacher from "./compents/teacher/Teacher";
import Course from "./compents/courses/Course";
import NewTeacher from "./compents/teacher/NewTeacher";

function App() {
  return (
    <div className="App">
      {/* <Departments /> */}
      <h1>
        <u>Teacher List</u>
      </h1>
      <Teacher />
      {/* <Course /> */}
      <NewTeacher />
    </div>
  );
}

export default App;
