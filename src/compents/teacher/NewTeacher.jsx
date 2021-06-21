import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { teachersUrl, courseUrl } from "../../utils/url";
import "./NewTeacher.css";
import { Link } from "react-router-dom";

function NewTeacher() {
  const [data, setData] = useState({
    tname: "",
    department: "",
  });
  const [departmentList, setDepartmentList] = useState([]);
  useEffect(() => {
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(teachersUrl, {
        tname: data.tname,
        department: data.department,
      })
      .then((res) => {
        // console.log(res.data);
        alert("created successfully");
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="form">
      <Form size="lg" action="" onSubmit={(e) => submit(e)}>
        <h1>New Teacher</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            className="input"
            id="tname"
            type="text"
            value={data.tname}
            placeholder="Name"
            onChange={(e) => handle(e)}
          />

          <Form.Label>Department</Form.Label>
          <FormControl
            required
            className="input"
            as="select"
            id="department"
            type="text"
            placeholder="department"
            onChange={(e) => handle(e)}
          >
            <option>--Department--</option>
            {departmentList.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </FormControl>
          <Link to="/teachers">
            <Button>Back</Button>
          </Link>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewTeacher;
