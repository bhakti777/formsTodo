import React, { Fragment } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
// import NavDropdown from "react-bootstrap/NavDropdown";


const BankUserPage=()=>{
return(
    <Fragment>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home">Origin Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">              
            </Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} >
                Add Customer
              </Nav.Link>
              <Nav.Link >All Our Customers</Nav.Link>
              <Nav.Link >Transaction Details</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Username :
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text/email" placeholder="username/email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password :
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Select Gender:
      </Form.Label>
      <Col sm={10}>
        <Form.Check
        inline
          type="radio"
          label="Female"
          name="Gender"
        />
        <Form.Check
        inline
          type="radio"
          label="Male"
          name="Gender"
        />
        <Form.Check
        inline
          type="radio"
          label="Other"
          name="Gender"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>

    </Fragment>
);
}

export default BankUserPage;