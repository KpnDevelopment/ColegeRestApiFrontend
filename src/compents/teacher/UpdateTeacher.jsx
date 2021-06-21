import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { teachersUrl } from "../../utils/url";

function UpdateTeacher() {
  const [data, setData] = useState({});
  const [updateData, setUpdata] = useState({
    tname: "",
    department: "",
  });
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const response = await axios.get(teachersUrl);
    // console.log(response.data);
    console.log(response.data[1]);
    setData(response.data[1]);
  };

  // handle function
  function handle(e) {
    const newData = { ...updateData };
    newData[e.target.id] = e.target.value;
    setUpdata(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/teachers/${data._id}`, {
        tname: updateData.tname,
        department: updateData.department,
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
            defaultValue={data.tname}
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
            defaultValue={data.department}
            placeholder="department"
            onChange={(e) => {
              handle(e);
            }}
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

export default UpdateTeacher;
