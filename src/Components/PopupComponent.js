import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const PopupComponent = ({ show, handleClose, handleShow, setIntoList, existingList }) => {

    const initialState = {
        taskName: "",
        assignedTo: "",
        dueDate: "",
        description: ""
    }

    const [formState, setFormState] = useState(initialState)

    const handleOnChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const handleAdd = () => {
        setIntoList([...existingList, formState.taskName])
        setFormState(initialState);
        handleClose();
    }

    console.log("formState =>", formState)

    return (
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Todo Item Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="4">
                                    Task Name:
                                     </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter task name"
                                        name="taskName"
                                        value={formState.taskName}
                                        onChange={handleOnChange}
                                    />
                                </Col>
                                <Form.Label column sm="4">
                                    Assigned to:
                                    </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="assignedTo"
                                        value={formState.assignedTo}
                                        onChange={handleOnChange}
                                    />
                                </Col>

                                <Form.Label column sm="4">
                                    Due date:
                                    </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="date"
                                        name="dueDate"
                                        value={formState.dueDate}
                                        onChange={handleOnChange}
                                    />
                                </Col>

                                <Form.Label column sm="4">
                                    Description:
                                    </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Write description"
                                        name="description"
                                        value={formState.description}
                                        onChange={handleOnChange}
                                    />
                                </Col>
                            </Form.Group>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


export default PopupComponent;