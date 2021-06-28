import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { teachersUrl, courseUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function UpdateTeacher(props) {
  const [data, setData] = useState({
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
    fetchTeachers();
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };
  const fetchTeachers = async () => {
    const response = await axios.get(
      `http://localhost:5001/teachers/${props.match.params.id}`
    );
    // console.log(response.data);
    console.log(response.data);
    setData(response.data);
  };

  // handle function
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
      .put(`http://localhost:5001/teachers/${data._id}`, {
        tname: data.tname,
        department: data.department,
        yearOfJoin: data.yearOfJoin,
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
            value={data.tname}
            placeholder="Name"
            onChange={(e) => {
              handle(e);
            }}
          />

          {/* <Form.Label>Department</Form.Label> */}
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
            {departmentList.map((dep, index) => (
              <option key={index} value={dep.name}>
                {dep.name}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            required
            placeholder="Year of Join"
            className="input"
            type="date"
            id="yearOfJoin"
            value={data.yearOfJoin}
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
          <Link to="/teachers">
            <Button>Back</Button>
          </Link>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default UpdateTeacher;
