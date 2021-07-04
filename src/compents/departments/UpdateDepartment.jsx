import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { courseUrl, departmentsUrl } from "../../utils/url";

function UpdateDepartment(props) {
  const [data, setData] = useState({
    depname: "",
    hod: "",
  });
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    fetchCourse();
    fetchDepartmentList();
  }, []);
  const fetchCourse = async () => {
    const response = await axios.get(
      `http://localhost:5001/departments/${props.match.params.id}`
    );
    console.log(response.data);
    setData(response.data);
  };
  const fetchDepartmentList = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setDepartmentList(response.data);
  };

  // handle function

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
      .put(`http://localhost:5001/departments/${props.match.params.id}`, {
        depname: data.depname,
        hod: data.hod,
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
      <form size="lg" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <FormControl
            id="depname"
            className="input"
            as="select"
            required
            value={data.depname}
            type="text"
            placeholder="Course Name"
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
            id="hod"
            className="input"
            placeholder="H0D"
            type="text"
            value={data.hod}
            onChange={(e) => handle(e)}
          ></Form.Control>
          <Link to="/departments">
            <Button>Back</Button>
          </Link>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </form>
    </div>
  );
}

export default UpdateDepartment;
