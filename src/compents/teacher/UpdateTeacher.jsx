import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { teachersUrl, courseUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function UpdateTeacher() {
  const [data, setData] = useState({
    tname: "",
    department: "",
  });
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    fetchTeachers();
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };
  const fetchTeachers = async () => {
    const response = await axios.get(teachersUrl);
    // console.log(response.data);
    console.log(response.data[1]);
    setData(response.data[1]);
  };

  // handle function
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/teachers/${data._id}`, {
        tname: data.tname,
        department: data.department,
      })
      .then((res) => {
        console.log(res.data);
        alert("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="UpdateTeacher" onSubmit={(e) => submit(e)}>
      <h1>updateTecher</h1>
      <Form size="lg" action="">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            className="input"
            id="tname"
            type="text"
            value={data.tname}
            placeholder="Name"
            onChange={(e) => {
              handle(e);
            }}
          />

          <Form.Label>Department</Form.Label>
          <Form.Control
            required
            className="input"
            as="select"
            id="department"
            type="text"
            value={data.department}
            placeholder="department"
            onChange={(e) => {
              handle(e);
            }}
          >
            <option>--Department--</option>
            {departmentList.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </Form.Control>
          <Link to="/teachers">
            <Button>Back</Button>
          </Link>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default UpdateTeacher;
