import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";

const DisplayLoginData = ({ formDetails }) => {
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {formDetails &&
            formDetails.map((user, index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default DisplayLoginData;
