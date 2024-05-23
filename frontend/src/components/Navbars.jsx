// import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { getPlaces } from "../API/placesaction";
import img from "../../src/assets/Img/profile_logo.png";
import "../styles/Navbars.css";

function Navbars({ setSearchTerm, isLoggedIn }) {
  // const [places, setPlaces] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   getPlaces()
  //     .then((data) => {
  //       setPlaces(data);
  //     })
  //     .catch((err) => setError(err));
  // }, []);
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };
  console.log(isLoggedIn)
  // const go = () => {
  //   Window.location.href= "/"
  // }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BOOK ANYWHERE</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href={"/login"}>
              {isLoggedIn ? <img width={"50px"} src={img} alt=""/> : "Login"}
            </Nav.Link>
            <Nav.Link href={`/signup`}>
              {isLoggedIn ? "" : "Signup"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
