import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import DisplayLoginData from "../Components/DisplayLoginData";

const LoginFormPage = () => {

  const initialState = {
    email: "",
    password: "",
  };

  const[users,setUsers]=useState([]);
  const [formState, setFormState] = useState(initialState);

  const handleOnChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("formDetails=>", formState);

    setUsers([...users,formState])  //add new users ,data
    setFormState(initialState)  //to blank form again
  };

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home">Login Page</Navbar.Brand>
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

      <div className="Login">
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              name="email"
              value={formState.email}
              onChange={handleOnChange}
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formState.password}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 0 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Button block size="lg" type="submit" onClick={handleOnSubmit}>
            Login
          </Button>
        </Form>
      </div>
      <br></br>

      <div className="Login-Table">
        <DisplayLoginData formDetails={users} />
      </div>
    </Fragment>
  );
};

export default LoginFormPage;
