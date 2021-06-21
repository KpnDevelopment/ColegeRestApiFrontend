import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { courseUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function NewCourse() {
  const [data, setData] = useState({
    name: "",
    noyear: "",
  });
  //   form handler

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }
  //   submit

  function submit(e) {
    e.preventDefault();
    axios
      .post(courseUrl, {
        name: data.name,
        noyear: data.noyear,
      })
      .then((res) => {
        console.log(res.data);
        alert("created successfully");
      });
  }
  return (
    <div className="form">
      <h1>new Course</h1>
      <Form size="lg" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <FormControl
            id="name"
            className="input"
            required
            type="text"
            placeholder="Course Name"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            as="select"
            id="noyear"
            className="input"
            type="text"
            value={data.noyear}
            placeholder="year"
            onChange={(e) => handle(e)}
          >
            <option>--year--</option>
            <option value="1 years">1 years</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
          </Form.Control>
          <Link to="/courses">
            <Button>Back</Button>
          </Link>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewCourse;
