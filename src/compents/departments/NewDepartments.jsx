import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { departmentsUrl } from "../../utils/url";

function NewDepartments() {
  const [data, SetData] = useState({
    depname: "",
    hod: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    SetData(newData);

    // console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(departmentsUrl, {
        depname: data.depname,
        hod: data.hod,
      })
      .then((res) => {
        // console.log(res.data);
        alert("created successfully");
      });
  }
  return (
    <div className="from">
      <Form size="lg" action="" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            className="input"
            id="depname"
            type="text"
            value={data.depname}
            placeholder="Name"
            onChange={(e) => handle(e)}
          />

          <Form.Label>Department</Form.Label>
          <Form.Control
            required
            className="input"
            id="hod"
            type="text"
            value={data.hod}
            placeholder="HOD"
            onChange={(e) => handle(e)}
          />
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewDepartments;
