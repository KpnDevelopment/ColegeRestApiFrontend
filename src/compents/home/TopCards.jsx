import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { courseUrl, studentsUrl, teachersUrl } from "../../utils/url";

function TopCards() {
  const [course, setCourse] = useState();
  const [student, setStudent] = useState();
  const [teacher, setTeacher] = useState();
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const Cresponse = await axios.get(courseUrl);
    // console.log(response.data);
    setCourse(Cresponse.data.length);
    const Sresponse = await axios.get(studentsUrl);
    // console.log(response.data);
    setStudent(Sresponse.data.length);
    const Tresponse = await axios.get(teachersUrl);
    // console.log(response.data);
    setTeacher(Tresponse.data.length);
  };

  const cardStyle = { width: "20rem", margin: "2rem" };
  return (
    <div>
      {/* <h1>hai</h1> */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Total Courses</Card.Title>
            <Card.Title>{course}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Total Student</Card.Title>
            <Card.Title>{student}</Card.Title>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Total Teachers</Card.Title>
            <Card.Title>{teacher}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TopCards;
