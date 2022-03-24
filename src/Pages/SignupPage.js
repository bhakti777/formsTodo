import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import FormCheck from "react-bootstrap/FormCheck";
import DisplaySignupComponent from "../Components/DisplaySignupComponent";

const SignupPage = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    isSelected: false,
  };

  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialState);

  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  console.log(formState);

  const handleOnAdd = () => {
    setUsers([...users, formState]);
    setFormState(initialState);
    console.log(users);
  };

  const handleOnDelete = (indexToDelete) => {
    const usersClone = [...users];
    usersClone.splice(indexToDelete, 1);
    setUsers(usersClone);
  };

  const [checked, setChecked] = useState(false); //handling check uncheck
  const handleOnCheck = (index) => {
    setChecked(!checked);
    const usersClone = [...users];
    console.log("userisSelected",usersClone[index].isSelected )
    if (usersClone[index].isSelected == true) {
      usersClone[index].isSelected = false;
    }
    if (usersClone[index].isSelected == false) {
      usersClone[index].isSelected = true;
    }
    setUsers(usersClone);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home">Signup Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Signup</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="Signup-margin">
        <Row>
          <Col xs={6}>
            <div className="signupformmargin">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  First Name:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter firstname"
                    value={formState.firstname}
                    name="firstname"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Last Name:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    sm="10"
                    type="lastname"
                    placeholder="Enter lastname"
                    value={formState.lastname}
                    name="lastname"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Email:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    sm="10"
                    type="email"
                    placeholder="Enter Email"
                    value={formState.email}
                    name="email"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Password:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={formState.password}
                    name="password"
                    onChange={handleOnChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Gender:
                </Form.Label>
                <Col sm="10">
                  <FormCheck inline>
                    <FormCheck.Input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Male</FormCheck.Label>
                  </FormCheck>
                  <FormCheck inline>
                    <FormCheck.Input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Female</FormCheck.Label>
                  </FormCheck>
                  <FormCheck inline>
                    <FormCheck.Input
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Other</FormCheck.Label>
                  </FormCheck>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  City:
                </Form.Label>
                <Col sm="10">
                  <FormCheck inline>
                    <FormCheck.Input
                      type="checkbox"
                      name="city"
                      value="Pune"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Pune</FormCheck.Label>
                  </FormCheck>
                  <FormCheck inline>
                    <FormCheck.Input
                      type="checkbox"
                      name="city"
                      value="Nashik"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Nashik</FormCheck.Label>
                  </FormCheck>
                  <FormCheck inline>
                    <FormCheck.Input
                      type="checkbox"
                      name="city"
                      value="other"
                      onChange={handleOnChange}
                    />
                    <FormCheck.Label>Other</FormCheck.Label>
                  </FormCheck>
                </Col>
              </Form.Group>

              <br />
              <Button block size="lg" type="submit" onClick={handleOnAdd}>
                Signup
              </Button>
            </div>
          </Col>

          <Col xs={6}>
            <div className="displaysignup">
              <DisplaySignupComponent
                formDetails={users}
                onDelete={handleOnDelete}
                checked={checked}
                handleOnCheck={handleOnCheck}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignupPage;
