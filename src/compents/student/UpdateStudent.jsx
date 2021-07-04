import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courseUrl } from "../../utils/url";

function UpdateStudent(props) {
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
  const [departmentList, setDepartmentList] = useState([]);
  useEffect(() => {
    // console.log(props.match.params.id);
    fetchStudent();
    fetchDepartmentList();
  }, []);
  // fetch the Students
  const fetchStudent = async () => {
    const response = await axios.get(
      `http://localhost:5001/students/${props.match.params.id}`
    );
    console.log(response.data);
    setData(response.data);
  };
  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };
  // handle

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  // submit

  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/students/${props.match.params.id}`, {
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
      .then((result) => {
        console.log(result);
        alert("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>UpdateStudent</h1>

      <Form className="form" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Control
            placeholder="Admission Number"
            className="input"
            type="number"
            id="admNo"
            value={data.admNo}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            placeholder="Name"
            className="input"
            type="text"
            id="studentName"
            value={data.studentName}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            className="input"
            as="select"
            id="department"
            type="text"
            value={data.department}
            placeholder="department"
            onChange={(e) => {
              handle(e);
            }}
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
            value={data.yearOfAdm}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Date Of Birth"
            className="input"
            type="date"
            id="dob"
            value={data.dob}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="SSLC RegNo"
            className="input"
            type="number"
            id="sslcRegNo"
            value={data.sslcRegNo}
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
            placeholder="Father's Name"
            className="input"
            type="input"
            id="fatherName"
            value={data.fatherName}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Address"
            className="input"
            type="input"
            id="address"
            value={data.address}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Pincode"
            className="input"
            type="number"
            id="pincode"
            value={data.pincode}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Mobile No"
            className="input"
            type="number"
            id="mobile"
            value={data.mobile}
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            placeholder="Email"
            className="input"
            type="email"
            id="email"
            value={data.email}
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

export default UpdateStudent;
