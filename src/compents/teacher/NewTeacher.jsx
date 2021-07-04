import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { teachersUrl, courseUrl } from "../../utils/url";
import "./NewTeacher.css";
import { Link } from "react-router-dom";

function NewTeacher() {
  const [data, setData] = useState({
    staffId: "",
    tname: "",
    department: "",
    yearOfJoin: "",
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

  function refreshPage() {
    window.location.reload(false);
  }
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

  const radioValue = [
    {
      value: "Female",
    },
    {
      value: "Male",
    },
    {
      value: "Other",
    },
  ];

  function submit(e) {
    e.preventDefault();
    axios
      .post(teachersUrl, {
        staffId: data.staffId,
        tname: data.tname,
        department: data.department,
        yearOfJoin: data.yearOfAdm,
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
        // console.log(res.data);
        alert("created successfully");
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form">
      <Form size="lg" action="" onSubmit={(e) => submit(e)}>
        <h1>New Teacher</h1>
        <Form.Group>
          <Form.Control
            required
            className="input"
            id="staffId"
            type="Number"
            value={data.staffId}
            placeholder="Staff Id"
            onChange={(e) => handle(e)}
          />
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            required
            className="input"
            id="tname"
            type="text"
            value={data.tname}
            placeholder="Name"
            onChange={(e) => handle(e)}
          />

          {/* <Form.Label>Department</Form.Label> */}
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
          <Form.Control
            required
            placeholder="Year of Join"
            className="input"
            type="date"
            id="yearOfJoin"
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
          <Form.Control
            required
            className="input"
            as="select"
            id="gender"
            type="text"
            value={data.gender}
            placeholder="gender"
            onChange={(e) => {
              handle(e);
            }}
          >
            <option>--Gender--</option>
            {radioValue.map((data, index) => (
              <option key={index} value={data.value}>
                {data.value}
              </option>
            ))}
          </Form.Control>

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
