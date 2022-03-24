import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import PopupComponent from "../Components/PopupComponent";
import FormPopupComponent from "../Components/FormPopupComponent";
import NewRowComponent from "../Components/NewRowComponent";

const TodoApplication = () => {
  // const [popup, setPopup] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//or
  // const handleTogglePopup = () => {
  //   setShow(!show);
  // };

  
  const [notCompletedList, setNotCompletedList] = useState(['Do Homework']);
  const [completedList, setCompletedList] = useState(['Done Exercise']);

  

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
              onClick={handleShow}
            >
              + New list
            </Button>
          </Col>

          <Col xs={6} style={{ display: "flex", justifyContent: "center" }}>
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


      {show && <PopupComponent
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        existingList={notCompletedList}
        setIntoList={setNotCompletedList} />}

      <div className="todoAppli-display">
        <Row>
          <Col xs={12}>
            <b>Not-Completed Tasks :</b>
            <ListGroup>
              {notCompletedList && notCompletedList.map((item) => {
                return <NewRowComponent newListDetails={item} />
              })}

            </ListGroup>
          </Col>
        </Row>

        {/* 
        <Row>
          <Col xs={12}>
            <b> Completed Tasks :</b>
            <ListGroup>
              {<NewRowComponent newListDetails={completedList} />}
            </ListGroup>
          </Col>
        </Row> */}
      </div>
    </Fragment>
  );
};

export default TodoApplication;
