import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";

const DisplayStudFormComponent = ({ formDetails }) => {
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {formDetails &&
            formDetails.map((user, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.address}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.zip}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default DisplayStudFormComponent;
