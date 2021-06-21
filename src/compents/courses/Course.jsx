import React, { useEffect, useState } from "react";
import axios from "axios";
import { courseUrl } from "../../utils/url";

function Course() {
  const [course, setCourse] = useState([]);

  
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    setCourse(response.data);
  };
  return (
    <div>
      <h1>
        <u>Courses</u>
      </h1>

      {course.map((data, index) => (
        <div key={index} className="course">
          <h54>{data.name}</h54>
          <h>{data.noyear}</h>
        </div>
      ))}
    </div>
  );
}

export default Course;
