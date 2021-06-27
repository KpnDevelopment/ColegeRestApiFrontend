import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { studentsUrl, courseUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function NewStudent() {
  const [data, setData] = useState({
    admNo: "",
    studentName: "",
    department: "",
    yearOfAdm: "",
    dob: "",
    sslcRegNo: "",
    gender: "",
    fatherName: "",
    address: "",
    pincode: "",
    mobile: "",
    email: "",
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
      .post(studentsUrl, {
        admNo: data.admNo,
        studentName: data.studentName,
        department: data.department,
        yearOfAdm: data.yearOfAdm,
        dob: data.dob,
        sslcRegNo: data.sslcRegNo,
        gender: data.gender,
        fatherName: data.fatherName,
        address: data.address,
        pincode: data.pincode,
        mobile: data.mobile,
        email: data.email,
      })
      .then((res) => {
        console.log(res.data);
        alert("created Sucessfully");
        refreshPage();
      });
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <h1>New Students</h1>
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
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Date Of Birth"
            className="input"
            type="date"
            id="dob"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="SSLC RegNo"
            className="input"
            type="number"
            id="sslcRegNo"
            onChange={(e) => handle(e)}
          />
          <Form.Group as={Row}>
            <Form.Label as="legend">Gender</Form.Label>
            <Row style={{ display: "flex", flexDirection: "row" }}>
              <Form.Check
                type="radio"
                label="Male"
                value="Male"
                name="formHorizontalRadios"
                id="gender"
                onChange={(e) => handle(e)}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="gender"
                value="Female"
                onChange={(e) => handle(e)}
              />
            </Row>
          </Form.Group>

          <Form.Control
            required
            placeholder="Father's Name"
            className="input"
            type="input"
            id="fatherName"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Address"
            className="input"
            type="input"
            id="address"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Pincode"
            className="input"
            type="number"
            id="pincode"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Mobile No"
            className="input"
            type="number"
            id="mobile"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Email"
            className="input"
            type="email"
            id="email"
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
export default NewStudent;
