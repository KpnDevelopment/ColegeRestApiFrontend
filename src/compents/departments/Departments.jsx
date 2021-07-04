import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { departmentsUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function Departments() {
  const [dep, setdep] = useState([]);

  useEffect(() => {
    fetchdepartments();
  }, []);

  const fetchdepartments = async () => {
    const response = await axios.get(departmentsUrl);
    // console.log(response.data);
    setdep(response.data);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      {/* <h1>{dep}</h1> */}

      {/* <h1>{data.depname}</h1>
          <h2>{data.hod}</h2>
          <Button
            onClick={() => {
              axios
                .delete(`http://localhost:5001/departments/${data._id}`)
                .then((res) => {
                  // console.log(res);
                  alert("delete");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Delete
          </Button> */}
      <Table striped bordered hover>
        <thead>
          <th>SlNo</th>
          <th>Department Name</th>
          <th>HOD</th>
          <th>Edit</th>
          <th>Delete</th>
          <th style={{ width: "2rem" }}>
            <Link to="/departments/new">
              <Button variant="success">add</Button>
            </Link>
          </th>
        </thead>
        <tbody>
          {dep.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.depname}</td>
              <td>{data.hod}</td>
              <td>
                <Link to={`/departments/${data._id}`}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5001/departments/${data._id}`)
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
  );
}

export default Departments;
