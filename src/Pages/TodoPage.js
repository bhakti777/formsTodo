import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import RowComponent from "../Components/RowComponent";


// 1. CompleteTask []
// 2. Not completed task []
// 3. New add -> Not completed task
// 4. To remove from not complete array and add it into complete array
// 5. UnCheck completed -> non completed

const TodoPage = () => {

  const [userInput, setUserInput] = useState("");
  const [completeTaskList, setCompletedTaskList] = useState(["Learn Flute"]);
  const [notCompletedTaskList, setNotCompletedTaskList] = useState(["Done Flute"]);


  const handleTextOnChange = (event) => {
    setUserInput(event.target.value)
  }

  const addTodoItem = () => {
    setNotCompletedTaskList([...notCompletedTaskList, userInput]);
    setUserInput("");
  };


  const handleMarkAsCompleted = (index) => {
    const notCompletedTaskListClone = [...notCompletedTaskList]; // Copy state variable
    const completedTask = notCompletedTaskListClone[index]; // Get the task which needs to be marked as completed
    setCompletedTaskList([...completeTaskList, completedTask]); // Add to completed task
    notCompletedTaskListClone.splice(index, 1) // Remove the task from not completed
    setNotCompletedTaskList(notCompletedTaskListClone)

  }

  const handleMarkAsNotCompleted = (index) => {

  }

  console.log("completeTaskList =>", completeTaskList);
  console.log("notCompletedTaskList =>", notCompletedTaskList);

  return (
    <Fragment>
      <Container fluid className="todo-Container">
        <h1 className="Heading">To-Do List</h1>
        <FormLabel>
          <b>Add Todo</b>
        </FormLabel>
        <Row>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <FormControl
                value={userInput}
                id="textval"
                onChange={handleTextOnChange}
                placeholder="Add new todo"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-dark" onClick={addTodoItem}>
                Add
                </Button>
            </InputGroup>
          </Col>
          <Col xs={6}></Col>
        </Row>
        <br />

        <Row>
          <Col xs={6}>
            <div>
              <b>Not-Completed Tasks :</b>
              <ListGroup>
                {notCompletedTaskList.map((todoItem, index) => {
                  return (
                    <RowComponent
                      checked={false}
                      index={index}
                      title={todoItem}
                      onSelect={handleMarkAsCompleted}
                    />
                  );
                })}
              </ListGroup>
            </div>
          </Col>

          <Col xs={6}>
            <div className="deleteListDiv">
              <b> Completed Tasks :</b>
              <ListGroup>
                {completeTaskList.map((todoItem) => {
                  return (
                    <RowComponent
                      checked={true}
                      title={todoItem}
                      onSelect={handleMarkAsNotCompleted}
                    />
                  );
                })}
              </ListGroup>
            </div>
          </Col>
        </Row>

      </Container>
    </Fragment>
  );
};

export default TodoPage;
