import React, { useEffect, useState } from "react";
import { teachersUrl } from "../../utils/url";
import axios from "axios";
import { Button } from "react-bootstrap";

function Teacher() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const response = await axios.get(teachersUrl);
    // console.log(response.data);
    setTeacher(response.data);
  };

  function updateTeacher(id) {
    axios({
      method: "patch",
      url: "http://localhost:5000/teachers/60cb6d73a2a30b38a2bcb9f5",
      data: {
        tname: "updatedTeacher",
        department: "updateddepartment",
      },
    }).then((data) => {
      console.log(data);
    });
  }
  function deleteStudnet(id) {
    axios.delete("http://localhost:5000/teachers/60cb6d73a2a30b38a2bcb9f5");
  }
  return (
    <div>
      {teacher.map((data, index) => (
        <div key={index} className="data">
          <h4>{data.tname}</h4>
          <h5>{data.department}</h5>
        </div>
      ))}
      <Button onClick={updateTeacher}>patch</Button>
      <Button onClick={deleteStudnet}>Delete</Button>
    </div>
  );
}

export default Teacher;
