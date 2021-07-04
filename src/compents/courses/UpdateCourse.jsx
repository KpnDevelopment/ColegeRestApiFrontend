import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
function UpdateCourse(props) {
  const [data, setData] = useState({
    name: "",
    noYear: "",
    totalPaper: "",
    description: "",
  });

  useEffect(() => {
    // console.log(props.match.params.id);
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const response = await axios.get(
      `http://localhost:5001/courses/${props.match.params.id}`
    );
    console.log(response.data);
    setData(response.data);
  };
  // handle

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/courses/${props.match.params.id}`, {
        name: data.name,
        noYear: data.noYear,
        totalPaper: data.totalPaper,
        description: data.description,
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
            className="input"
            required
            id="name"
            // defaultValue={data.name}
            value={data.name}
            type="text"
            placeholder="Course Name"
            onChange={(e) => handle(e)}
          />
          <FormControl
            required
            as="select"
            id="noYear"
            // className="input"
            // placeholder="year"
            // type="text"
            value={data.noYear}
            onChange={(e) => handle(e)}
          >
            {/* {console.log(data.noyear)} */}
            <option>--year--</option>
            <option value="1 years">1 years</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
          </FormControl>
          <FormControl
            className="input"
            required
            id="totalPaper"
            // defaultValue={data.name}
            value={data.totalPaper}
            type="text"
            placeholder="Total paper"
            onChange={(e) => handle(e)}
          />
          <FormControl
            className="input"
            required
            id="description"
            // defaultValue={data.name}
            value={data.description}
            type="text"
            placeholder="Description"
            onChange={(e) => handle(e)}
          />
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
