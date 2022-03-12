import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormPopupComponent = ({ onCancel, onInputChange, onPressAdd, formInput }) => {
  return (
    <div className="card">

      <Card className="text-center">
        <Card.Header> New List </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>

          <Card.Text>
            <div className="">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Task Name:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="text"
                    placeholder="Enter task name"
                    name="taskName"
                  // value={formInput.taskName}
                  // onChange={onInputChange}
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
                  // value={formInput.assignedTo}
                  // onChange={onInputChange}
                  />
                </Col>

                <Form.Label column sm="4">
                  Due date:
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="date"
                    name="dueDate"
                  //  value={formInput.dueDate}
                  // onChange={onInputChange}
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
                  //  value={formInput.description}
                  // onChange={onInputChange}
                  />
                </Col>
              </Form.Group>
            </div>
          </Card.Text>

          <Button variant="dark" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="success"
            style={{ marginLeft: "10px" }}
          // onClick={onPressAdd}
          >
            Add
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default FormPopupComponent;
