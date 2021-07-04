import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "../teacher/NewTeacher.css";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const login = {
    email: "apple@gmail.com",
    password: "1234",
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Form className="form" onSubmit={(e) => submit(e)}>
        <Form.Group>
          <Form.Control
            type="email"
            required
            placeholder="email"
            onChange={(e) => handle(e)}
          />
          <Form.Control
            type="password"
            required
            placeholder="password"
            onChange={(e) => handle(e)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
