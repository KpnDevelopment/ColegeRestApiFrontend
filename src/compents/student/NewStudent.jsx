import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { studentsUrl } from "../../utils/url";

function NewStudent() {
  const [data, setData] = useState({
    admNo: "",
    studentName: "",
    department: "",
    yearOfAdm: "",
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
      .post(studentsUrl, {
        admNo: data.admNo,
        studentName: data.studentName,
        department: data.department,
        yearOfAdm: data.yearOfAdm,
      })
      .then((res) => {
        console.log(res.data);
        alert("created Sucessfully");
      });
  }
  return (
    <div>
      <h1>New Course</h1>
      <Form className="form" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Control
            placeholder="Admission Number"
            className="input"
            type="number"
            id="admNo"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            placeholder="Name"
            className="input"
            type="text"
            id="studentName"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            className="input"
            as="select"
            id="department"
            type="text"
            placeholder="department"
            onChange={(e) => handle(e)}
          >
            <option>-Select Department-</option>
            <option>Computer Engineering</option>
            <option>Electronics Engineering</option>
            <option>Printing Technology</option>
          </Form.Control>
          <Form.Control
            required
            placeholder="Year of Admission"
            className="input"
            type="date"
            id="yearOfAdm"
            onChange={(e) => handle(e)}
          />
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default NewStudent;
