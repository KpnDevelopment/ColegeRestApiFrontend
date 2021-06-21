import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { teachersUrl } from "../../utils/url";
import "./NewTeacher.css";

function NewTeacher() {
  const [data, setData] = useState({
    tname: "",
    department: "",
  });
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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="form">
      <Form size="lg" action="" onSubmit={(e) => submit(e)}>
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
            <option>-Select Department-</option>
            <option>Computer Engineering</option>
            <option>Electronics Engineering</option>
            <option>Printing Technology</option>
          </Form.Control>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewTeacher;
