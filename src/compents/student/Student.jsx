import React, { useEffect, useState } from "react";
import axios from "axios";
import { studentsUrl } from "../../utils/url";

function Student() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const response = await axios.get(studentsUrl);
    console.log(response.data);
    setStudent(response.data);
  };
  return (
    <div>
      <h1>Students</h1>
      {student.map((data, index) => (
        <div key={index} className="details">
          <h3>{data.admNo}</h3>
          <h3>{data.studentName}</h3>
          <h3>{data.department}</h3>
          <h3>{data.yearOfAdm}</h3>
        </div>
      ))}
    </div>
  );
}

export default Student;
