import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  const liStyle = {
    color: "white",
    margin: "1rem",
  };

  return (
    <Navbar
      className="navigation"
      fixed="top"
      bg="dark"
      variant="dark"
      style={{ zIndex: "999" }}
    >
      <Navbar.Brand className="brand"> College</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link" to="/">
          <li style={liStyle}>Home</li>
        </Link>
        <Link className="link" to="/courses">
          <li style={liStyle}>Course</li>
        </Link>

        <Link className="link" to="/departments">
          <li style={liStyle}>Departments</li>
        </Link>
        <Link className="link" to="/students">
          <li style={liStyle}>Students</li>
        </Link>
        <Link className="link" to="/teachers">
          <li style={liStyle}>Teachers</li>
        </Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="search-btn" variant="danger">
          Search
        </Button>
      </Form> */}
    </Navbar>
  );
}

export default NavigationBar;
