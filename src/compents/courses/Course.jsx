import React, { useEffect, useState } from "react";
import axios from "axios";
import { courseUrl } from "../../utils/url";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const response = await axios.get(courseUrl);
    // console.log(response.data);
    setCourse(response.data);
  };
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>
        <u>Courses</u>
      </h1>

      <div className="course">
        <Table striped bordered hover>
          <thead>
            <th>SlNo</th>
            <th>Name</th>
            <th>Number Of Years</th>
            <th>Edit</th>
            <th>Delete</th>
            <th style={{ width: "2rem" }}>
              <Link to="/courses/new">
                <Button variant="success">add</Button>
              </Link>
            </th>
          </thead>

          <tbody>
            {course.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.noyear}</td>
                <td>
                  <Link to={`/courses/${data._id}`}>
                    <Button variant="primary">Edit</Button>
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      axios
                        .delete(`http://localhost:5001/courses/${data._id}`)
                        .then((res) => {
                          // console.log(res);
                          alert("deleted");
                          refreshPage();
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Course;
