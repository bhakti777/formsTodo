import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";

const ComponentTwo = (props) => {

  return (
    <>
        <ListGroup.Item>
          <div>
            <Row>

              <Col xs={1}>
                {" "}
                <input
                  type="checkbox"
                  onChange={props.onCheck}
                  style={{ height: "20px", width: "20px" }}
                />
              </Col>

              <Col xs={10}>{props.checkedTitle}</Col>


              <Col
                xs={1}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CloseButton onClick={props.onSelect } />
              </Col>
            </Row>
          </div>
        </ListGroup.Item>
    </>
  );
};

export default ComponentTwo;
