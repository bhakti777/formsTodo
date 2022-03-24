import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";

const SignupFormComponent = ({ setUsers, users }) => {
    const initialState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        isSelected: false,
    };

    const [formState, setFormState] = useState(initialState);

    const handleOnChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleOnAdd = () => {
        setUsers([...users, formState]);
        setFormState(initialState);
    };

    return (

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

    );
};

export default SignupFormComponent;
