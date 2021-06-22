import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courseUrl } from "../../utils/url";

function UpdateStudent(props) {
  const [data, setData] = useState({
    admNo: "",
    studentName: "",
    department: "",
    yearOfAdm: "",
  });
  const [departmentList, setDepartmentList] = useState([]);
  useEffect(() => {
    // console.log(props.match.params.id);
    fetchStudent();
    fetchDepartmentList();
  }, []);
  // fetch the Students
  const fetchStudent = async () => {
    const response = await axios.get(
      `http://localhost:5000/students/${props.match.params.id}`
    );
    console.log(response.data);
    setData(response.data);
  };
  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };
  // handle

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  // submit

  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/students/${props.match.params.id}`, {
        admNo: data.admNo,
        studentName: data.studentName,
        department: data.department,
        yearOfAdm: data.yearOfAdm,
      })
      .then((result) => {
        console.log(result);
        alert("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>UpdateStudent</h1>

      <Form className="form" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Control
            placeholder="Admission Number"
            className="input"
            type="number"
            id="admNo"
            value={data.admNo}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            placeholder="Name"
            className="input"
            type="text"
            id="studentName"
            value={data.studentName}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            className="input"
            as="select"
            id="department"
            type="text"
            value={data.department}
            placeholder="department"
            onChange={(e) => handle(e)}
          >
            <option>--Department--</option>
            {departmentList.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            required
            placeholder="Year of Admission"
            className="input"
            type="date"
            id="yearOfAdm"
            value={data.yearOfAdm}
            onChange={(e) => handle(e)}
          />
          <Link to="/students">
            <Button>Back</Button>
          </Link>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default UpdateStudent;
