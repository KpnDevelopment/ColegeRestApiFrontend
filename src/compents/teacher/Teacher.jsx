import React, { useEffect, useState } from "react";
import { teachersUrl } from "../../utils/url";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Teacher() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    const response = await axios.get(teachersUrl);
    // console.log(response.data);
    // console.log(response.data[0]._id);
    setTeacher(response.data);
  };
  function refreshPage() {
    window.location.reload(false);
  }

  // ? updateTeacher() direct patch function

  /* function updateTeacher(id) {
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
  } */
  // ? deleteStudent() function used for direct delete
  // function deleteStudnet(id) {
  //   axios.delete("http://localhost:5000/teachers/60cb6d73a2a30b38a2bcb9f5");
  // }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <th>SlNo</th>
          <th>Name</th>
          <th>department</th>
          <th>Edit</th>
          <th>Delete</th>
          <th style={{ width: "2rem" }}>
            <Link to="/teachers/new">
              <Button variant="success">add</Button>
            </Link>
          </th>
        </thead>
        <tbody>
          {teacher.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.tname}</td>
              <td>{data.department}</td>
              <td>
                <Link to={`/teachers/${data._id}`}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5000/teachers/${data._id}`)
                      .then(() => {
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
  );
}

export default Teacher;
