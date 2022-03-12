import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormPopupComponent from "../Components/FormPopupComponent";

const TodoApplication = () => {
  const [popup, setPopup] = useState(false);

  const handleTogglePopup = () => {
    setPopup(!popup);
  };

  // const initialState = {
  //   taskName: "",
  //   assignedTo: "",
  //   dueDate: "",
  //   description: "",
  // };
  // const [formState, setFormState] = useState(initialState);
  // const handleOnChange = (event) => {
  //   setFormState({ ...formState, [event.target.name]: event.target.value });
  //   console.log(event.target.name, event.target.value);
  // };

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="#home">
            <b>
              <u>Todo Application</u>
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav></Nav>
            <Nav
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "40%",
              }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2}>Lineup</Nav.Link>
              <Nav.Link>Pings</Nav.Link>
              <Nav.Link>Hey!</Nav.Link>
              <Nav.Link>Activity</Nav.Link>
              <Nav.Link>My Stuff</Nav.Link>
              <Nav.Link>Find</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="Heading">
        <h3>My Todo-s</h3>
      </div>

      <div className="Buttons-margin">
        <Row>
          <Col>
            <Button
              variant="success"
              style={{ display: "flex", justifyContent: "left" }}
              onClick={handleTogglePopup}
            >
              + New list
            </Button>
          </Col>

          <Col xs={6} style={{ display: "flex", justifyContent: "center" }}>
            <h3></h3>
          </Col>

          <Col>
            <DropdownButton
              title="View As..."
              id="bg-nested-dropdown"
              style={{ display: "flex", justifyContent: "right" }}
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </div>

      <div className="todoFormPopup-margin">
        {popup && (
          <FormPopupComponent
            onCancel={handleTogglePopup}
            // onChange={handleOnChange}
          />
        )}
      </div>

      <div></div>
    </Fragment>
  );
};

export default TodoApplication;
