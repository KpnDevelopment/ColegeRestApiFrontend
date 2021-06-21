import React, { useEffect, useState } from "react";
import axios from "axios";
import { courseUrl } from "../../utils/url";
import { Button } from "react-bootstrap";

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
  return (
    <div>
      <h1>
        <u>Courses</u>
      </h1>

      {course.map((data, index) => (
        <div key={index} className="course">
          <h4>{data.name}</h4>
          <h4>{data.noyear}</h4>
          <Button
            onClick={() => {
              axios
                .delete(`http://localhost:5000/courses/${data._id}`)
                .then((res) => {
                  // console.log(res);
                  alert("deleted");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Course;
