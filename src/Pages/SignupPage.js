import React, { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SignupFormComponent from "../Components/SignupFormComponent";
import DisplaySignupComponent from "../Components/DisplaySignupComponent";
import HeaderComponent from "../Components/HeaderComponent";

const SignupPage = () => {

  const initialUsers = [
    {
      firstname: "Ajinkya",
      lastname: "Kathe",
      email: "aj@gmail.com",
      password: "",
      gender: "",
      city: "",
      isSelected: false,
    },
    {
      firstname: "James",
      lastname: "Franklien",
      email: "james@gmail.com",
      password: "",
      gender: "",
      city: "",
      isSelected: false,
    },
    {
      firstname: "Nick",
      lastname: "",
      email: "nick@gmail.com",
      password: "",
      gender: "",
      city: "",
      isSelected: false,
    }
  ]

  const [users, setUsers] = useState(initialUsers);

  const handleFilter = (searchText) => {

    // If searchText is blank set initial users
    if (searchText == "") {
      setUsers(initialUsers)
    } else {
      // If searchText is not blank set initial users
      const clonedUsers = [...users];
      const filteredUsers = clonedUsers.filter((user) => user.email === searchText);
      setUsers(filteredUsers)
    }



  }

  const handleOnDelete = (indexToDelete) => {
    const usersClone = [...users];
    usersClone.splice(indexToDelete, 1);
    setUsers(usersClone);
  };


  const handleOnCheck = (index) => {
    const usersClone = [...users];
    if (usersClone[index].isSelected == true) {
      console.log("==IN TRUE  ==");
      usersClone[index].isSelected = false;

    } else {
      console.log("== IN FALSE NEW ==");
      usersClone[index].isSelected = true;
    }
    setUsers(usersClone);
    return

  };
  return (
    <>
      <HeaderComponent />
      <div className="Signup-margin">
        <Row>
          <Col xs={6}>
            <SignupFormComponent setUsers={setUsers} users={users} />
          </Col>
          <Col xs={6}>
            <DisplaySignupComponent
              formDetails={users}
              handleFilter={handleFilter}
              onDelete={handleOnDelete}
              handleOnCheck={handleOnCheck}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignupPage;
