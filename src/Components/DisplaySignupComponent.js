import React, { Fragment, useState } from "react";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import Table from "react-bootstrap/Table";

const DisplaySignupComponent = ({ formDetails, onDelete, handleOnCheck, handleFilter }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleEnterEvent = (event) => {
    if (event.key == 'Enter') {
      handleFilter(searchQuery);
    }
  }


  return (
    <Fragment>
      <Form.Control onKeyPress={handleEnterEvent} value={searchQuery} onChange={handleOnChange} type="text" placeholder="Search Email..." style={{ marginBottom: "10px" }} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Selected</th>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {formDetails &&
            formDetails.map((user, index) => {
              return (
                <tr key={index} className={user.isSelected === true ? "changecolor" : ""}>
                  <td>
                    <input
                      type="checkbox"
                      checked={user.isSelected}
                      onClick={() => handleOnCheck(index)}
                      className="changecolor"
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td>
                    <CloseButton onClick={() => onDelete(index)} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default DisplaySignupComponent;
