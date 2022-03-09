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
import ListComponent from "../Components/ListComponent";
import CheckedListComponent from "../Components/CheckedListComponent";

const TodoPage = () => {
  const [todoList, setTodoList] = useState(["Learn Flute"]);

  const AddTodoItem = () => {
    const newTodoItem = document.querySelector("#textval").value;
    setTodoList([...todoList, newTodoItem]);
    console.log("todoItem=>", todoList);
  };

  const deleteItemFromList = (indexToDelete) => {
    const todoListClone = [...todoList];
    
    todoListClone.splice(indexToDelete, 1);
    setTodoList(todoListClone);
  };

  const handleCheckedList = (indexToMove) => {
    let checkedItems = [...todoList];
    checkedItems.splice(indexToMove, 1);
    setTodoList(checkedItems);
  };

  return (
    <Fragment>
      <Container fluid className="todo-Container">
        <h1 className="Heading">To-Do List</h1>

        <Form>
          <FormLabel>
            <b>Add Todo</b>
          </FormLabel>
          <Row>
            <Col xs={6}>
              <InputGroup className="mb-3">
                <FormControl
                  id="textval"
                  placeholder="Add new todo"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-dark" onClick={AddTodoItem}>
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
                  {todoList.map((todoItem) => {
                    return (
                      <ListComponent
                        title={todoItem}
                        onSelect={deleteItemFromList}
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
                  {todoList.map((checkedTask) => {
                    return (
                      <CheckedListComponent
                        checkedTitle={checkedTask}
                        onCheck={handleCheckedList}
                      />
                    );
                  })}
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </Fragment>
  );
};

export default TodoPage;
