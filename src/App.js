import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Departments from "./compents/departments/Departments";
import NewDepartments from "./compents/departments/NewDepartments";
import UpdateDepartment from "./compents/departments/UpdateDepartment";

import Teacher from "./compents/teacher/Teacher";
import NewTeacher from "./compents/teacher/NewTeacher";
import UpdateTeacher from "./compents/teacher/UpdateTeacher";

import Course from "./compents/courses/Course";
import NewCourse from "./compents/courses/NewCourse";
import UpdateCourse from "./compents/courses/UpdateCourse";

import Student from "./compents/student/Student";
import NewStudent from "./compents/student/NewStudent";
import UpdateStudent from "./compents/student/UpdateStudent";

import Home from "./compents/home/Home";
import NavigationBar from "./compents/navigationbar/NavigationBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="components">
          <Switch>
            <Route path="/" exact component={Home} />

            {/* course Routes */}

            <Route path="/courses" exact component={Course} />
            <Route path="/courses/new" exact component={NewCourse} />
            <Route path="/courses/:id" exact component={UpdateCourse} />

            {/* department Routes */}

            <Route path="/departments" exact component={Departments} />
            <Route path="/departments/new" exact component={NewDepartments} />
            <Route path="/departments/:id" exact component={UpdateDepartment} />

            {/* student Routes */}

            <Route path="/students" exact component={Student} />
            <Route path="/students/new" exact component={NewStudent} />
            <Route path="/students/:id" exact component={UpdateStudent} />

            {/* teacher Routes */}

            <Route path="/teachers" exact component={Teacher} />
            <Route path="/teachers/new" component={NewTeacher} />
            <Route path="/teachers/:id" component={UpdateTeacher} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
