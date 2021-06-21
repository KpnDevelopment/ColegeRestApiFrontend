import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function UpdateCourse(props) {
  const [data, setData] = useState({});
  const [updateData, setUpdateData] = useState({
    name: "",
    noyear: "",
  });
  useEffect(() => {
    // console.log(props.match.params.id);
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const response = await axios.get(
      `http://localhost:5000/courses/${props.match.params.id}`
    );
    console.log(response.data);
    setData(response.data);
  };
  // handle

  function handle(e) {
    const newData = { ...updateData };
    newData[e.target.id] = e.target.value;
    setUpdateData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/courses/${props.match.params.id}`, {
        name: updateData.name,
        noyear: updateData.noyear,
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
          <Form.Control
            id="name"
            className="input"
            required
            defaultValue={data.name}
            type="text"
            placeholder="Course Name"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            required
            as="select"
            id="noyear"
            className="input"
            placeholder="year"
            type="text"
            defaultValue={data.noyear}
            onChange={(e) => handle(e)}
          >
            <option>--year--</option>
            <option>1 year</option>
            <option>2 year</option>
            <option>3 year</option>
          </Form.Control>
          <Link to="/courses">
            <Button>Back</Button>
          </Link>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </form>
    </div>
  );
}
export default UpdateCourse;
