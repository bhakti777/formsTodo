import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";

const NewRowComponent = ({ newListDetails }) => {

  return (
    <>
      <ListGroup.Item>
        <div>
          <Row>

            <Col xs={1}>
              <input
                type="checkbox"
                style={{ height: "20px", width: "20px" }}
              />
            </Col>
            <Col xs={10}>{newListDetails}</Col>
            <Col
              xs={1}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <CloseButton />
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default NewRowComponent;
