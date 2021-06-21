import "./App.css";
import Departments from "./compents/departments/Departments";
import Teacher from "./compents/teacher/Teacher";
import Course from "./compents/courses/Course";
import NewTeacher from "./compents/teacher/NewTeacher";
import NewDepartments from "./compents/departments/NewDepartments";
import NewCourse from "./compents/courses/NewCourse";
import Student from "./compents/student/Student";
import NewStudent from "./compents/student/NewStudent";
import UpdateTeacher from "./compents/teacher/UpdateTeacher";

function App() {
  return (
    <div className="App">
      <Teacher />
      <UpdateTeacher />
    </div>
  );
}

export default App;
