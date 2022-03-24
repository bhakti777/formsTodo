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

const HeaderComponent = () => {

    return (

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



    );
};

export default HeaderComponent;
