import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import DisplayStudFormComponent from "../Components/DisplayStudFormComponent";


const StudentRegistration = (props) => {

//created an object
const initialState={firstname: "",
lastname: "",
email: "",
password: "",
address: "",
state: "",
city: "",
zip: ""}

//To add new row
const [users,setUsers]=useState([]);

  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("formdata=>",formData);
    setUsers([...users,formData]) //to add new users
    setFormData(initialState)  //set state blank again
  };



  return (
    <Fragment>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Registration Form</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#" disabled>
                  Contacts
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="reg-form-margin">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter firstname"
                  value={formData.firstname}
                  name="firstname"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="lastname"
                  placeholder="Enter lastname"
                  value={formData.lastname}
                  name="lastname"
                  onChange={handleOnChange}
                  />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  name="email"
                  onChange={handleOnChange}
                 />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  onChange={handleOnChange}
                  />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={formData.address}
                name="address"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City:</Form.Label>
                <Form.Control
                  value={formData.city}
                  name="city"
                  onChange={handleOnChange}
                  />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State:</Form.Label>
                <Form.Select
                  // defaultValue="Choose..."
                  value={formData.state}
                  name="state"
                  onChange={handleOnChange}
                  >
                  <option>Choose...</option>
                  <option>Maharashtra</option>
                  <option>Gujrat</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={formData.zip}
                  name="zip"
                  onChange={handleOnChange}
                  />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <br></br>

      
    <DisplayStudFormComponent formDetails={users}/>
    
    </Fragment>
  );
};

export default StudentRegistration;
