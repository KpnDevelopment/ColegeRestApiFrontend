import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { departmentsUrl, courseUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function NewDepartments() {
  const [data, SetData] = useState({
    depname: "",
    hod: "",
  });
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    fetchDepartmentList();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }
  //
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    SetData(newData);

    // console.log(newData);
  }
  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };
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
        refreshPage();
      });
  }
  return (
    <div className="from">
      <h1>new Departments</h1>
      <Form size="lg" action="" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="select"
            required
            className="input"
            id="depname"
            type="text"
            placeholder="Name"
            onChange={(e) => handle(e)}
          >
            <option>--Department--</option>
            {departmentList.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </Form.Control>

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
          <Link to="/departments">
            <Button>back</Button>
          </Link>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewDepartments;
