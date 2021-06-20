import axios from "axios";
import { useEffect, useState } from "react";
import { departmentsUrl } from "../../utils/url";

function Departments() {
  const [dep, setdep] = useState([]);

  useEffect(() => {
    fetchdepartments();
  }, []);

  const fetchdepartments = async () => {
    const response = await axios.get(departmentsUrl);
    console.log(response.data);
    setdep(response.data);
  };
  return (
    <div>
      {/* <h1>{dep}</h1> */}
      {dep.map((data, index) => (
        <div className="departement">
          <h1>{data.depname}</h1>
          <h2>{data.hod}</h2>
        </div>
      ))}
    </div>
  );
}

export default Departments;
