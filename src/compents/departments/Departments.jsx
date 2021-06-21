import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { departmentsUrl } from "../../utils/url";

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
  return (
    <div>
      {/* <h1>{dep}</h1> */}
      {dep.map((data, index) => (
        <div key={index} className="departement">
          <h1>{data.depname}</h1>
          <h2>{data.hod}</h2>
          <Button
            onClick={() => {
              axios
                .delete(`http://localhost:5000/departments/${data._id}`)
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
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Departments;
