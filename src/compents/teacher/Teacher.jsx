import React, { useEffect, useState } from "react";
import { teachersUrl } from "../../utils/url";
import axios from "axios";

function Teacher() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const response = await axios.get(teachersUrl);
    console.log(response.data);
    setTeacher(response.data);
  };

  return (
    <div>
      {teacher.map((data, index) => (
        <div className="data">
          <h4>{data.tname}</h4>
          <h5>{data.department}</h5>
        </div>
      ))}
    </div>
  );
}

export default Teacher;
