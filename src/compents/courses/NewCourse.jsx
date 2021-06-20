import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { courseUrl } from "../../utils/url";

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
    <div className="form" onSubmit={(e) => submit(e)}>
      <Form size="lg">
        <Form.Group>
          <Form.Control
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
            <option>1 year</option>
            <option>2 year</option>
            <option>3 year</option>
          </Form.Control>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewCourse;
